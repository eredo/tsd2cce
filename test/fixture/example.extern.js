'use strict';

var TestModule = {};


/**
 * @interface
 */
TestModule.TestInterface = function() {};


/**
 * @param {(string|number)} paramString
 * @param {number=} paramNumber
 * @param {TestModule.TestClass=} paramClass
 * @param {*=} itsAny
 * @return {(boolean|string)}
 */
TestModule.TestInterface.prototype.myMethod = function(paramString, paramNumber, paramClass, itsAny) {};


/**
 * @constructor
 * @extends {TestModule.TestInterface}
 * @param {string} test
 */
TestModule.TestClass = function(test) {};


/**
 * @type {string}
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
 * @return {*}
 */
TestModule.TestClass.staticMethod = function() {};


/**
 * @type {string}
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
