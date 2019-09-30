'use strict';
var Singleton = /** @class */ (function () {
    function Singleton(name, age) {
        if (!Singleton.instance) {
            this.name = name;
            this.age = age;
            Singleton.instance = this;
        }
        console.log(typeof Singleton.instance);
        return Singleton.instance;
    }
    return Singleton;
}());
var a = new Singleton('Yehor', 12);
var b = new Singleton('Ihor', 14);
console.log(a === b);
