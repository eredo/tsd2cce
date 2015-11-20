'use strict';

const NodeKind = require('../../src/parser').NodeKind;

exports.AST = {
  TestModule: {
    kind: NodeKind.MODULE,
    qualifiedName: 'TestModule',

    TestInterface: {
      kind: NodeKind.INTERFACE,
      qualifiedName: 'TestModule.TestInterface',

      '#': {
        myMethod: {
          kind: NodeKind.METHOD,
          qualifiedName: 'TestModule.TestInterface.prototype.myMethod',
          isStatic: false,
          type: ['boolean', 'string'],
          parameters: [
            {
              name: 'paramString',
              type: ['string', 'number']
            },
            {
              name: 'paramNumber',
              type: 'number',
              isOptional: true
            },
            {
              name: 'paramClass',
              type: 'TestModule.TestClass',
              isOptional: true
            },
            {
              name: 'itsAny',
              type: '*',
              isOptional: true
            }
          ]
        }
      }
    },

    TestClass: {
      kind: NodeKind.CLASS,
      extends: 'TestModule.TestInterface',
      qualifiedName: 'TestModule.TestClass',

      parameters: [
        {
          name: 'test',
          type: 'string'
        }
      ],
      '#': {
        property: {
          kind: NodeKind.PROPERTY,
          qualifiedName: 'TestModule.TestClass.prototype.property',
          type: 'string'
        },

        myMethod: {
          kind: NodeKind.METHOD,
          qualifiedName: 'TestModule.TestClass.prototype.myMethod',
          isStatic: false,
          type: ['boolean', 'string'],
          parameters: [
            {
              name: 'paramString',
              type: ['string', 'number']
            },
            {
              name: 'paramNumber',
              type: 'number',
              isOptional: true
            },
            {
              name: 'paramClass',
              type: 'TestModule.TestClass',
              isOptional: true
            },
            {
              name: 'itsAny',
              type: '*',
              isOptional: true
            }
          ]
        }
      },

      staticMethod: {
        kind: NodeKind.METHOD,
        qualifiedName: 'TestModule.TestClass.staticMethod',
        isStatic: true,
        type: '*',
        parameters: []
      }
    },

    initClass: {
      kind: NodeKind.VARIABLE,
      qualifiedName: 'TestModule.initClass',
      type: 'TestModule.TestClass'
    },

    func: {
      kind: NodeKind.FUNCTION,
      qualifiedName: 'TestModule.func',
      type: ['TestModule.TestClass', 'string'],
      parameters: [
        {
          name: 'args',
          type: 'string',
          isSpread: true
        }
      ]
    },

    TestEnum: {
      kind: NodeKind.OBJECT,
      qualifiedName: 'TestModule.TestEnum',

      HELLO: {
        kind: NodeKind.OBJECT,
        qualifiedName: 'TestModule.TestEnum.HELLO'
      },

      WORLD: {
        kind: NodeKind.OBJECT,
        qualifiedName: 'TestModule.TestEnum.WORLD'
      }
    }
  }
};
