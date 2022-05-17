// Tipado debil -> tipo desde el valor
// Tipado dinámico -> tipo puede cambiar

let foo;
console.log(foo, typeof foo);
foo = 34;
console.log(foo, typeof foo);
foo = 'pepe';
console.log(foo, typeof foo);
foo = true;
console.log(foo, typeof foo);
foo = null;
console.log(foo, typeof foo);
foo = {};
console.log(foo, typeof foo);

function bar() {}
bar();

const some = function (params) {};
some();

const someNew = () => {};
someNew();

const other = some;
other();

function add(num1, num2) {
    num1++;
}

let x = 8;
let y = 9;
add(x, y);
