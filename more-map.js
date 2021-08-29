const friends = ['tom cruise', 'tom hanks ', 'tom cat'];

const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'bluw' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' },

];
const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
// console.log(productNames);
// console.log(productPrices);
// products.map(product => console.log(product));

// array.forEach(element => {

// });

products.forEach(product => console.log(product));