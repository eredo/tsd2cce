declare module TestModule {

  interface TestInterface {
    myMethod(paramString:(string|number), paramNumber?:number, paramClass?:TestClass, itsAny?:any): (boolean|string);
  }

  export class TestClass implements TestInterface {
    property:{[id: string]: number};

    constructor(test:string);
    myMethod(paramString:string, paramNumber:number, paramClass:TestClass, itsAny:any): boolean;
    myMethod(overloaded:number): string;

    static staticMethod(): any;
  }

  export var initClass:TestClass;

  export function func(...args:string[]): (TestClass|string);

  export enum TestEnum {
    HELLO, WORLD
  }
}
