function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.planet = 'Tierra';

Person.prototype.greetings = function () {
    console.log(
        `Hola soy ${this.name}, y tengo ${this.age} años y ` + Person.isAlive()
    );
};

Person.hasBrain = true;

Person.isAlive = function () {
    return 'Estoy vivo';
};

const p1 = new Person('Pepe', 23);
const p2 = new Person('Luisa', 25);

p1.greetings();
p2.greetings();

console.log(p1.planet);
console.log(p2);
console.log(Person.hasBrain);

// const arr = []; //new array>()
// Array.prototype.tururu = function () {
//     this.tururu = 'Tururu';
//

const arr = [];

arr.map((item) => item);
console.log(arr);
console.log('Is array', Array.isArray(arr));
// Array.constructor.isArray(arr);

const str = '';
String.fromCharCode(67);
str.toLocaleUpperCase;
