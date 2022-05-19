const mammal = {
    brainy: true,
};

const human = {
    __proto__: mammal,
    teeth: 32,
};

const gween = {
    __proto__: human,
    age: 19,
};

const mary = Object.create(human);
mary.age = 25;

console.log(gween.teeth, gween);
console.log(mary.teeth, mary);
console.log(gween.__proto__);
console.log(gween.brainy);

gween.teeth = 30;

console.log(gween.teeth);

console.log(mammal.hasOwnProperty('brainy'));
console.log(mary.hasOwnProperty('brainy'));
console.log(mary.hasOwnProperty('age'));
