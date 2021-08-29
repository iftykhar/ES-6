// 1. let and const 
const hubby = 'omor sani';
let phone = 'iphone';
phone = 'android';

//back tick
const myNotes = `i am a ${hubby}. and i don't have a ${phone}`;
console.log(myNotes);

// default parameter 
function maxNumber(array = []) {
    const max = Math.max(...array); //spread operator
    return max;
}

const number = [20, 89, 13, 78];
console.log(maxNumber(number));

//arrow function
const square = x => x ** 2;
console.log(square(8));