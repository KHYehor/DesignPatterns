'use strict';

// Singleton example realisation with operator new
// which returns the same instance
class Singleton {
  private static instance: Singleton;
  public name: string | null = null;
  public age: number | null = null;

  public constructor(name: string, age: number) {
    if (!Singleton.instance) {
      this.name = name;
      this.age = age;
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const SingleObject1: Singleton = new Singleton('Yehor', 12);
const SingleObject2: Singleton = new Singleton('Ihor', 32);

if (SingleObject1.name === SingleObject2.name) console.log('They are equil');
