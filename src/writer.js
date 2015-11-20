'use strict';

const beautify = require('js-beautify').js_beautify;
const NodeKind = require('./parser').NodeKind;

const PROPERTIES = ['kind', 'qualifiedName', 'parameters', 'isStatic', 'type',
  'isSpread', 'isOptional', 'extends', 'implements', '#'];


class Writer {

  /**
   * Generates code based on the AST.
   * @param {Object} ast
   * @param {{strict:boolean}=} opt_options
   */
  constructor(ast, opt_options) {
    this.code_ = [];
    this.ast_ = ast;
    this.options_ = opt_options || {strict: true};

    if (this.options_.strict) {
      this.code_.push(`'use strict';`);
    }

    this.traverse_(this.ast_);
  }

  /**
   * Returns the code as a string.
   * @return {string}
   */
  toCode() {
    return beautify(this.code_.join('\n'), {indent_size: 2});
  }

  traverse_(node, name) {
    if (node.kind && name) {
      switch (node.kind) {
        case NodeKind.MODULE: this.writeModule_(node); break;
        case NodeKind.CLASS: this.writeClass_(node); break;
        case NodeKind.INTERFACE: this.writeInterface_(node); break;
        case NodeKind.FUNCTION: this.writeFunction_(node); break;
        case NodeKind.METHOD: this.writeFunction_(node); break;
        case NodeKind.PROPERTY: this.writeProperty_(node); break;
        case NodeKind.VARIABLE: this.writeProperty_(node); break;
        case NodeKind.OBJECT: this.writeObject_(node); break;
      }
    }

    if (!node.kind || node.kind === NodeKind.CLASS ||
      node.kind === NodeKind.INTERFACE || node.kind === NodeKind.OBJECT ||
      node.kind === NodeKind.MODULE) {

      for (let key in node) {
        if (PROPERTIES.indexOf(key) === -1) {
          this.traverse_(node[key], key);
        }
      }
    }

    if (node.kind === NodeKind.CLASS && node['#']) {
      for (let key in node['#']) {
        this.traverse_(node['#'][key], key);
      }
    }
  }


  /**
   * @private
   */
  writeModule_(node) {
    this.code_.push(`
var ${node.qualifiedName} = {};
    `);
  }

  writeClass_(node) {
    let comments = ['@constructor'];

    if (node.extends) {
      comments.push(`@extends {${node.extends}}`);
    }

    this.writeParameterComments_(node, comments);
    this.writeFunctionDeclaration_(node, comments);
  }

  writeInterface_(node) {
    let comments = ['@interface'];
    this.writeParameterComments_(node, comments);
    this.writeFunctionDeclaration_(node, comments);
  }

  writeFunction_(node) {
    let comments = [];

    this.writeParameterComments_(node, comments);

    if (node.type) {
      comments.push(`@return {${Writer.typeToString(node.type, node)}}`);
    }

    this.writeFunctionDeclaration_(node, comments);
  }

  writeProperty_(node) {
    let comments = [];
    if (node.type) {
      comments.push(`@type {${Writer.typeToString(node.type, node)}}`);
    }

    this.writeExpression_(node, comments, '');
  }

  writeObject_(node) {
    let comments = [];
    if (node.type) {
      comments.push(`@type {${Writer.typeToString(node.type, node)}}`);
    }

    this.writeExpression_(node, comments, ' = {}');
  }

  writeFunctionDeclaration_(node, comments) {
    this.writeExpression_(node, comments, ` = function(${Writer.parametersString(node)}) {}`);
  }

  writeParameterComments_(node, comments) {
    if (node.parameters && node.parameters.length) {
      node.parameters.forEach((param) => {
        comments.push(`@param {${Writer.typeToString(param.type, param)}} ${param.name}`);
      });
    }
  }

  writeExpression_(node, comments, expr) {
    this.code_.push(`
/**
${comments.map(c => ' * ' + c).join('\n')}
*/
${node.qualifiedName}${expr};
    `);
  }

  static parametersString(node) {
    if (!node.parameters || !node.parameters.length) {
      return '';
    }

    return node.parameters.map(p => p.name).join(', ');
  }

  static typeToString(type, node) {
    if (Array.isArray(type)) {
      return `(${type.join('|')})${node.isOptional ? '=' : ''}`;
    }

    if (typeof type === 'object') {
      return '{' + Object.keys(type).map(k =>
          `${k}: ${Writer.typeToString(type[k].type, type[k])}`).join(', ') + '}';
    }

    return type + (node.isOptional ? '=' : '');
  }
}

exports.Writer = Writer;
