const number = [2, 4, 6, 8];
const output = [];

// function doubleOld(num) {
//     return num * 2;
// }

const doubleOld = num => num * 2;
for (const num of number) {
    const result = doubleOld(num);
    output.push(result);
}
// console.log(output);

const result = number.map(doubleOld);
console.log(result);

const sqr = number.map(x => x ** 2);
console.log(sqr)