const alumno = {
    curso: 'JS',
};

const foo = {
    __proto__: alumno,
    name: 'pepe',
    age: 23,
    greetings: function (params) {
        console.log(`Hola soy ${this.name}, y tengo ${this.age} años`);
    },
};

foo.name = 'Jose';
foo.altura = 180;
// delete foo.age

foo.greetings();
// console.log(foo);
console.log(foo, foo.curso);

const bar = {
    __proto__: alumno,
    name: 'maria',
    age: 25,
    greetings: function (params) {
        console.log(`Hola soy ${this.name}, y tengo ${this.age} años`);
    },
};
bar.greetings();
console.log(bar, bar.curso);
