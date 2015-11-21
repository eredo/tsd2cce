'use strict';

const ts = require('typescript');

/**
 * @enum {number}
 */
const NodeKind = {
  MODULE: 1,
  CLASS: 2,
  INTERFACE: 3,
  METHOD: 4,
  PROPERTY: 5,
  FUNCTION: 6,
  VARIABLE: 7,
  OBJECT: 8
};
exports.NodeKind = NodeKind;

const SimpleTypes = [
  'number', 'string', 'boolean', 'any', 'Object', 'Array', 'void'
];


class Parser {

  constructor(filename, source) {
    /**
     * The source code of the .d.ts file.
     * @type {string}
     * @private
     */
    this.source_ = source;

    /**
     * @private
     */
    this.tsAst_ =
      ts.createSourceFile(filename, source, ts.ScriptTarget.ES6, true);

    /**
     * @type {{}}
     * @private
     */
    this.ast_ = {};

    this.parse_();
  }

  get ast() {
    return this.ast_;
  }

  parse_() {
    let self = this;

    function traverse(/** ts.Node */node) {
      switch (node.kind) {
        case ts.SyntaxKind.ModuleDeclaration:
          self.defineModule(node);
          break;
        case ts.SyntaxKind.EnumDeclaration:
          self.defineObject(node);
          break;
        case ts.SyntaxKind.EnumMember:
          self.defineObject(node);
          break;
        case ts.SyntaxKind.InterfaceDeclaration:
          self.defineInterface(node);
          break;
        case ts.SyntaxKind.ClassDeclaration:
          self.defineClass(node);
          break;
        case ts.SyntaxKind.Constructor:
          self.defineConstructor(node);
          break;
        case ts.SyntaxKind.MethodSignature:
        case ts.SyntaxKind.MethodDeclaration:
          self.defineMethod(node);
          break;
        case ts.SyntaxKind.PropertyDeclaration:
          self.defineProperty(node);
          break;
        case ts.SyntaxKind.PropertySignature:
          self.definePropertySignature(node);
          break;
        case ts.SyntaxKind.VariableDeclaration:
          self.defineVariable(node);
          break;
        case ts.SyntaxKind.FunctionDeclaration:
          self.defineFunction(node);
          break;
      }

      ts.forEachChild(node, traverse);
    }

    traverse(this.tsAst_);
  }

  /**
   * @param {ts.Node} node
   * @param {NodeKind} kind
   * @return {Object}
   * @private
   */
  initNodeNamespace_(node, kind) {
    let obj = this.getNamespace_(Parser.getNamespaceName(node, false));
    obj.kind = kind;

    return obj;
  }

  /**
   * @param {ts.Node} node
   * @param {NodeKind} kind
   * @return {Object}
   * @private
   */
  initNodeMemberNamespace_(node, kind) {
    let member = node.name.text;
    let parent = this.getNamespace_(Parser.getNamespaceName(node, true));
    parent['#'] = parent['#'] || {};
    let obj = (parent['#'][member] = parent['#'][member] || {});
    obj.kind = kind;
    return obj;
  }

  /**
   * @param {string} name
   * @return {Object}
   * @private
   */
  getNamespace_(name) {
    let nameParts = name.split('.');
    let index = 0;
    let tree = this.ast_;

    (function traverseName() {
      if (!tree[nameParts[index]]) {
        tree[nameParts[index]] = {};
      }

      tree = tree[nameParts[index]];

      index++;
      if (index < nameParts.length) {
        traverseName();
      }
    })();

    return tree;
  }

  /**
   * Returns the full qualified type name of a node.
   * @param {ts.Node} node
   * @return {string|Array<string>}
   */
  getTypeName(node) {
    if (node.type && node.type.typeName) {
      return Parser.convertType(Parser.getModuleName(node) + '.' +
        node.type.typeName.text, !!node.dotDotDotToken, node);
    }

    if (node.type) {
      let type = this.getCodeLiteral(node.type.pos, node.type.end);

      type = type.replace(/^\((.*)\)$/, '$1');
      type = type.split('|').map((t) => Parser.convertType(t, !!node.dotDotDotToken, node));

      if (type.length > 1) {
        return type;
      }

      return type[0];
    }

    return '*';
  }

  /**
   * Checks if a node is static by looking up prefixed code.
   * @param {ts.Node} node
   * @return {boolean}
   */
  isStatic(node) {
    if (node.modifiers && node.modifiers.length) {
      return node.modifiers.some((mod) => {
        return Parser.removeComments(this.getCodeLiteral(mod.pos, mod.end)) === 'static';
      });
    }

    return false;
  }

  /**
   * @param {!number} start
   * @param {!end} end
   * @return {string}
   */
  getCodeLiteral(start, end) {
    return this.source_.substr(start, end - start).trim();
  }

  /**
   * @param {Object} ast
   * @param {ts.Node} node
   * @return {Object}
   * @private
   */
  appendType_(ast, node) {
    if (ast.type && !Array.isArray(ast.type)) {
      ast.type = [ast.type];
    }

    if (node.questionToken) {
      ast.isOptional = true;
    }

    if (node.dotDotDotToken) {
      ast.isSpread = true;
    }

    if (ast.type) {
      let res = this.transformType_(node);
      // Exclude voids
      if (res === 'void') {
        return ast;
      }

      if (!Array.isArray(res)) {
        res = [res];
      }

      Array.prototype.push.apply(ast.type, res);
    } else {
      let type = this.transformType_(node);
      // Exclude voids
      if (type === 'void') {
        return ast;
      }

      ast.type = type;
    }

    return ast;
  }

  transformType_(node) {
    if (node.type && Array.isArray(node.type.parameters)) {
      // Transform a function expression type
      let funcNode = {};
      funcNode.kind = NodeKind.FUNCTION;
      funcNode.parameters = this.getParameters_(node.type);
      this.appendType_(funcNode, node.type);

      // Function declarations within arguments "function()=" will cause a warning
      // therefore we just return "function" as a type
      if (funcNode.parameters.length === 0 && !funcNode.type) {
        return 'function';
      }

      return `function(${funcNode.parameters.map(p => p.name + ':' + p.type).join(',')})${funcNode.type ? ':' + funcNode.type : ''}`;
    }

    // Transform an object type
    if (node.type && node.type.members && node.type.members.length) {
      // Transform an object map
      if (node.type.members[0].parameters) {
        return `Object<${this.getTypeName(node.type.members[0].parameters[0])},${this.getTypeName(node.type.members[0])}>`;
      }

      let type = {};

      node.type.members.forEach((member) => {
        type[member.name.text] = {};
        this.appendType_(type[member.name.text], member);
      });

      return type;
    }

    return this.getTypeName(node);
  }

  /**
   * @param {ts.Node} node
   * @returns {Array<Object>}
   * @private
   */
  getParameters_(node) {
    if (!node.parameters) {
      return [];
    }

    let startOptionals = false;
    return node.parameters.map((param) => {
      return this.appendType_({
        name: param.name.text
      }, param);
    }).map((param) => {
      // TODO: Implement a better way to detect when to start setting
      // parameters to optional.
      startOptionals = startOptionals || param.isOptional;

      if (startOptionals) {
        param.isOptional = true;
      }

      if (param.isOptional && param.name.substr(0, 4) !== 'opt_') {
        param.name = 'opt_' + param.name;
      }

      return param;
    });
  }

  defineModule(/** ts.Node */node) {
    this.initNodeNamespace_(node, NodeKind.MODULE)
      .qualifiedName = Parser.getNamespaceName(node);
  }

  defineObject(/** ts.Node */node) {
    this.initNodeNamespace_(node, NodeKind.OBJECT)
      .qualifiedName = Parser.getNamespaceName(node);
  }

  defineInterface(/** ts.Node */node) {
    this.initNodeNamespace_(node, NodeKind.INTERFACE)
      .qualifiedName = Parser.getNamespaceName(node);
  }

  defineClass(/** ts.ClassLikeDeclaration */node) {
    let clazz = this.initNodeNamespace_(node, NodeKind.CLASS);
    clazz.qualifiedName = Parser.getNamespaceName(node);
    clazz.extends = Parser.getHeritageName(node);
  }

  defineConstructor(/** ts.ConstructorDeclaration */node) {
    let clazz = this.getNamespace_(Parser.getNamespaceName(node, true));
    clazz.parameters = Parser.mergeParameters(clazz.parameters,
      this.getParameters_(node));
  }

  defineFunction(/** ts.FunctionDeclaration */node) {
    let func = this.initNodeNamespace_(node, NodeKind.FUNCTION);
    func.qualifiedName = Parser.getNamespaceName(node);
    func.parameters = Parser.mergeParameters(func.parameters,
      this.getParameters_(node));
    this.appendType_(func, node);
  }

  defineMethod(/** ts.MethodDeclaration */node) {
    let method;
    let isStatic = this.isStatic(node);

    if (isStatic) {
      method = this.initNodeNamespace_(node, NodeKind.METHOD);
      method.qualifiedName = Parser.getNamespaceName(node);
    } else {
      method = this.initNodeMemberNamespace_(node, NodeKind.METHOD);
      method.qualifiedName = Parser.getPrototypeNamespaceName(node);
    }

    method.isStatic = isStatic;
    method.parameters = Parser.mergeParameters(method.parameters,
      this.getParameters_(node));

    this.appendType_(method, node);
  }

  defineProperty(/** ts.PropertyDeclaration */node) {
    let property = this.initNodeMemberNamespace_(node, NodeKind.PROPERTY);
    property.qualifiedName = Parser.getPrototypeNamespaceName(node);
    this.appendType_(property, node);
  }

  definePropertySignature(/** ts.PropertySignature */node) {
    let property;

    switch (node.parent.parent.kind) {
      case ts.SyntaxKind.PropertyDeclaration:
        //property = this.initNodeMemberNamespace_(node.parent.parent, NodeKind.PROPERTY);
        break;
      case ts.SyntaxKind.VariableDeclaration:
        //property = this.getNamespace_(Parser.getNamespaceName(node.parent.parent, false));
        break;
      case ts.SyntaxKind.MethodDeclaration:
        if (this.isStatic(node.parent.parent)) {
          property = this.getNamespace_(Parser.getNamespaceName(node.parent.parent, false));
        } else {
          property = this.initNodeMemberNamespace_(node.parent.parent, NodeKind.METHOD);
        }
        break;
      //default:
      //  console.log('Skipping signature', node.parent.parent.kind);
        //throw new Error('Unknown property signature container:' +
        //  node.parent.parent.kind);
    }

    if (!property) {
      // Skipping this signature. This happens in parameters
      return;
    }

    if (typeof property.type !== 'object') {
      property.type = {};
    }

    property.type[node.name.text] = {};
    this.appendType_(property.type[node.name.text], node);
  }

  defineVariable(/** ts.PropertyDeclaration */node) {
    let variable = this.initNodeNamespace_(node, NodeKind.VARIABLE);
    variable.qualifiedName = Parser.getNamespaceName(node);
    this.appendType_(variable, node);
  }

  /**
   * Converts a type declaration to closure type.
   * @param {string} type
   * @param {boolean} hasSpread
   * @param {ts.Node} parentNode
   * @return {string}
   */
  static convertType(type, hasSpread, parentNode) {
    if (hasSpread) {
      return type.replace(/(.*)\[]$/, '$1');
    }

    if (type.match(/\[]$/) !== null) {
      return 'Array<' + Parser.convertSimpleType(type.replace(/(.*)\[]$/, '$1'), parentNode) +
        '>';
    }

    let matchesObject = type.match(/^\{\[\s*?[a-zA-Z0-9_]+\s*?:\s*?([a-z]+)\s*?]\s*?:\s*?([a-zA-Z\._\[\]]+)[\s;]*?}$/);
    if (matchesObject !== null) {
      return `Object<${Parser.convertSimpleType(matchesObject[1])},${Parser.convertType(matchesObject[2], false, parentNode)}>`;
    }

    return Parser.convertSimpleType(type, parentNode);
  }

  static convertSimpleType(type, parentNode) {
    if (SimpleTypes.indexOf(type) !== -1) {
      if (type === 'any') {
        return '*';
      }

      return type;
    }

    let module = Parser.getModuleName(parentNode);

    // TODO: Implement functionality when declarations import other declarations
    if (type.indexOf(module) === -1) {
      return module + '.' + type;
    }

    return type;
  }

  /**
   * Gets the full qualified namespace name of a node.
   * @param {ts.Node} node
   * @param {boolean} parentOnly
   * @return {string}
   */
  static getNamespaceName(node, parentOnly) {
    let names = [];

    (function traverseParents(n) {
      if (n.name) {
        names.push(n.name.text);
      }

      if (n.parent) {
        traverseParents(n.parent);
      }
    })(parentOnly ? node.parent : node);

    names.reverse();

    return names.join('.');
  }

  /**
   * Gets the full qualified namesapce name within the prototype of the parent
   * node.
   * @param {ts.Node} node
   * @return {string}
   */
  static getPrototypeNamespaceName(node) {
    return Parser.getNamespaceName(node, true) + '.prototype.' + node.name.text;
  }

  /**
   * Returns the encapsulating module name of the node.
   * @param {ts.Node} node
   * @return {string}
   */
  static getModuleName(node) {
    let moduleName = null;

    (function traverseParents(/** ts.Node */n) {
      if (n.kind === ts.SyntaxKind.ModuleDeclaration) {
        moduleName = Parser.getNamespaceName(n);
      } else {
        if (n.parent) {
          traverseParents(n.parent);
        }
      }
    })(node);

    return moduleName;
  }

  /**
   * @param {ts.Node} node
   * @return {?string}
   */
  static getHeritageName(/** ts.ClassLikeDeclaration */node) {
    if (node.heritageClauses && node.heritageClauses.length) {
      return Parser.getModuleName(node) + '.' + node.heritageClauses[0].types[0].expression.text;
    }

    return null;
  }

  /**
   * Merges parameters.
   * @param {Array<Object>} params1
   * @param {Array<Object>} params2
   */
  static mergeParameters(params1, params2) {
    if (!params1) {
      params1 = [];
    }

    if (!params2 || !params2.length) {
      return params1;
    }

    let length = Math.max(params1.length, params2.length);
    let optional = false;

    for (let i = 0; i < length; i++) {
      if (!params1[i]) {
        if (optional) {
          params2[i].isOptional = true;

          if (params2[i].name.substr(0, 4) !== 'opt_') {
            params2[i].name = 'opt_' + params2[i].name;
          }
        }

        params1[i] = params2[i];
      } else {
        if (params1[i].isOptional) {
          optional = true;
        }

        if (params2[i]) {
          if (!Array.isArray(params1[i].type)) {
            params1[i].type = [params1[i].type];
          }

          params1[i].type.push(params2[i].type);
        } else {
          params1[i].isOptional = true;

          if (params1[i].name.substr(0, 4) !== 'opt_') {
            params1[i].name = 'opt_' + params1[i].name;
          }
        }
      }
    }

    return params1;
  }

  /**
   * @param {string} str
   * @return {string}
   */
  static removeComments(str) {
    // little bit dangerous...
    return str.replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:([\s;])+\/\/(?:.*)$)/gm, '').trim();
  }
}

exports.Parser = Parser;
