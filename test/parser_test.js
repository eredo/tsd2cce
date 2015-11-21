'use strict';

const readFileSync = require('fs').readFileSync;
const Parser = require('../src/parser').Parser;
const NodeKind = require('../src/parser').NodeKind;
const expect = require('chai').expect;
const exampleAst = require('./fixture/example.ast.js').AST;

describe('Parser', function() {
  let parser;

  before(function() {
    parser = new Parser('test.d.ts',
      readFileSync(__dirname + '/fixture/example.d.ts').toString());
  });

  function kind(kind, node) {
    expect(node).to.be.an('object');
    expect(node.kind).to.equal(kind);
  }

  const isMethod = kind.bind(null, NodeKind.METHOD);
  const isFunction = kind.bind(null, NodeKind.FUNCTION);
  const isVariable = kind.bind(null, NodeKind.VARIABLE);
  const isClass = kind.bind(null, NodeKind.CLASS);
  const isModule = kind.bind(null, NodeKind.MODULE);
  const isProperty = kind.bind(null, NodeKind.PROPERTY);
  const isInterface = kind.bind(null, NodeKind.INTERFACE);

  function testMyMethod(method) {
    expect(method).to.be.an('object');
    isMethod(method);
    expect(method.isStatic).to.equal(false);
    expect(method.type).to.be.an('array');
    expect(method.type[0]).to.equal('boolean');
    expect(method.type[1]).to.equal('string');
    expect(method.parameters).to.be.an('array');
    expect(method.parameters).to.have.length(4);
    expect(method.parameters[0]).to.be.an('object');
    expect(method.parameters[0].name).to.equal('paramString');
    expect(method.parameters[0].type).to.an('array');
    expect(method.parameters[0].type[0]).to.equal('string');
    expect(method.parameters[0].type[1]).to.equal('number');
    expect(method.parameters[0].type.length).to.equal(2);
    expect(method.parameters[1].name).to.equal('opt_paramNumber');
    expect(method.parameters[1].type).to.equal('number');
    expect(method.parameters[1].isOptional).to.equal(true);
    expect(method.parameters[2].name).to.equal('opt_paramClass');
    expect(method.parameters[2].type).to.equal('TestModule.TestClass');
    expect(method.parameters[2].isOptional).to.equal(true);
    expect(method.parameters[3].name).to.equal('opt_itsAny');
    expect(method.parameters[3].type).to.equal('*');
    expect(method.parameters[3].isOptional).to.equal(true);
  }

  it('should contain an ast', function() {
    expect(parser.ast).to.be.an('object');
  });

  it('AST should contain the module', function() {
    let module = parser.ast['TestModule'];
    isModule(module);
  });

  it('AST should contain the interface', function() {
    let interf = parser.ast['TestModule']['TestInterface'];
    isInterface(interf);
    //testMyMethod(interf['#']['myMethod']);
  });

  it('AST should contain the class', function() {
    let classObj = parser.ast['TestModule']['TestClass'];
    isClass(classObj);
    expect(classObj.parameters).to.have.length(1);
  });

  it('AST should contain the members object', function() {
    expect(parser.ast['TestModule']['TestClass']['#']).to.be.an('object');
  });

  it('AST should contain the method with it\'s parameters', function() {
    let method = parser.ast['TestModule']['TestClass']['#']['myMethod'];
    testMyMethod(method);
  });

  it('AST should contain the static method', function() {
    let method = parser.ast['TestModule']['TestClass']['staticMethod'];
    isMethod(method);
    expect(method.isStatic).to.equal(true);
    expect(method.type).to.equal('*');
  });

  it('AST should contain the property', function() {
    let property = parser.ast['TestModule']['TestClass']['#']['property'];
    isProperty(property);
    expect(property.type).to.equal('Object<string,Array<number>>');
  });

  it('AST should contain the variable', function() {
    let variable = parser.ast['TestModule']['initClass'];
    isVariable(variable);
    expect(variable.type).to.equal('TestModule.TestClass');
  });

  it('AST should contain the function', function() {
    let func = parser.ast['TestModule']['func'];
    isFunction(func);
    expect(func.parameters).to.have.length(1);
    expect(func.parameters[0].name).to.equal('args');
    expect(func.parameters[0].type).to.equal('string');
    expect(func.parameters[0].isSpread).to.equal(true);
    expect(func.type).to.have.length(2);
    expect(func.type[0]).to.equal('TestModule.TestClass');
    expect(func.type[1]).to.equal('string');
  });

  // An overview of how the actual AST looks like. This could be used
  // to replace all the unit tests however I think the actual tests are
  // easier to debug.
  it('AST should have the following structure', function() {
    expect(parser.ast).to.deep.equal(exampleAst);
  });
});
