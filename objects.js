const p = {
    user: 'Constancio',
    age: 34,
};

// let  prop = 'user'
// p.[prop];

const aData = [];

aData.push(1);
aData.map((item) => item + 2);

export function push(array, item) {
    array[array.length] = item;
    return array.length;
}

push(aData, 34);
console.log(aData);

// {...obj}

let temp = structuredClone(obj);
temp = JSON.parse(JSON.stringify(obj));

temp.name = 'maria';
// return temp;

let human = {
    teeth: 32,
};

let gwen = {
    __proto__: human,
    age: 19,
};
