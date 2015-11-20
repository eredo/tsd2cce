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
 * @type {Object<string,number>}
 */
TestModule.TestClass.prototype.property;


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
