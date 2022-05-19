function cratePerson(name, age) {
    return {
        name,
        age,
        greetings: function (params) {
            console.log(`Hola soy ${this.name}, y tengo ${this.age} años`);
        },
    };
}

const p1 = cratePerson('pepe', 22);
p1.greetings();
