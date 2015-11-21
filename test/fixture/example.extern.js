'use strict';

var TestModule = {};


/**
 * @interface
 */
TestModule.TestInterface = function() {};


/**
 * @param {(string|number)} paramString
 * @param {number=} opt_paramNumber
 * @param {TestModule.TestClass=} opt_paramClass
 * @param {*=} opt_itsAny
 * @return {(boolean|string)}
 */
TestModule.TestInterface.prototype.myMethod = function(paramString, opt_paramNumber, opt_paramClass, opt_itsAny) {};


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
 * @type {{name: string, data: number=, subobject: {subname: string}}}
 */
TestModule.TestClass.prototype.object;


/**
 * @type {function(id:number)}
 */
TestModule.TestClass.prototype.propFunc;


/**
 * @param {(string|number)} paramString
 * @param {number=} opt_paramNumber
 * @param {TestModule.TestClass=} opt_paramClass
 * @param {*=} opt_itsAny
 * @return {(boolean|string)}
 */
TestModule.TestClass.prototype.myMethod = function(paramString, opt_paramNumber, opt_paramClass, opt_itsAny) {};


/**
 * @type {TestModule.TestClass}
 */
TestModule.initClass;


/**
 * @type {{data: Object<string,TestModule.TestClass>}}
 */
TestModule.initObject;


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
