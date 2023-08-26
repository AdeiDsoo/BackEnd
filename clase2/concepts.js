const exp = Math.pow(4.2, 3);
const expES7 = 4.2 ** 3;
console.log(exp, expES7);

const array = [1, 2, 3, 4, 5, 6, 7, 8, , 8, 9];
console.log(array.includes(2), array.includes(10));

const objects = [
    { manzanas: 3, peras: 2, carne: 1, jugos: 5, dulces: 2 },
    { manzanas: 1, sandias: 1, huevos: 6, jugos: 1, panes: 4 },
];
const keys = [];
objects.forEach((element) => {
    keys.push(Object.keys(element));
});

// console.log(keys.flat(), 'flat')--- con flat se aplana un array anidado

const allKeys = [...keys[0], ...keys[1]];
const resultWithIncludes = [];
allKeys.forEach((element) => {
    if (!resultWithIncludes.includes(element)) {
        resultWithIncludes.push(element);
    }
});
console.log(resultWithIncludes)

let result = allKeys.filter((item, index) => {
    return allKeys.indexOf(item) === index;
});
const values = [];
objects.forEach((element) => {
    values.push(Object.values(element));
});
const allValues = [...values[0], ...values[1]].reduce((a, b) => a + b);

console.log(allValues);
