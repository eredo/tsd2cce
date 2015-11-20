'use strict';

var TestModule = {};


/**
 * @interface
 */
TestModule.TestInterface = function() {};


/**
 * @constructor
 * @extends {TestModule.TestInterface}
 * @param {string} test
 */
TestModule.TestClass = function(test) {};


/**
 * @return {*}
 */
TestModule.TestClass.staticMethod = function() {};


/**
 * @type {Object<string,Array<number>>}
 */
TestModule.TestClass.prototype.property;


/**
 * @type {{name: string, data: number=}}
 */
TestModule.TestClass.prototype.object;


/**
 * @param {(string|number)} paramString
 * @param {number=} paramNumber
 * @param {TestModule.TestClass=} paramClass
 * @param {*=} itsAny
 * @return {(boolean|string)}
 */
TestModule.TestClass.prototype.myMethod = function(paramString, paramNumber, paramClass, itsAny) {};


/**
 * @type {TestModule.TestClass}
 */
TestModule.initClass;


/**
 * @param {string} args
 * @return {(TestModule.TestClass|string)}
 */
TestModule.func = function(args) {};


/**

*/
TestModule.TestEnum = {};


/**

*/
TestModule.TestEnum.HELLO = {};


/**

*/
TestModule.TestEnum.WORLD = {};
