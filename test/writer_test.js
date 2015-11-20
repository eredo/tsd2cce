'use strict';

const Writer = require('../src/writer').Writer;
const exampleAST = require('./fixture/example.ast.js').AST;
const readFileSync = require('fs').readFileSync;
const expect = require('chai').expect;

describe('Writer', function() {
  let writer;

  before(function() {
    writer = new Writer(exampleAST);
  });

  it('should return the proper code representation', function() {
    let code = writer.toCode();
    expect(code).to.equal(readFileSync(__dirname + '/fixture/example.extern.js')
      .toString().trim());
  });
});
