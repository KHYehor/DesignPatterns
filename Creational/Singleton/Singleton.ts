'use strict';

class Singleton {
  private static instance: Singleton;
  private name: string;
  private age: number;

  public constructor(name: string, age: number) {
    if (!Singleton.instance) {
      this.name = name;
      this.age = age;
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const a = new Singleton('Yehor', 12);
const b = new Singleton('Ihor', 14);

console.log(a === b);
