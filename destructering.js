const fish = { id: 100, name: 'king hilsa', price: 6000, phone: '0169874521', address: 'jamuna' };

// const name = fish.name;
// const price = fish.price;
// const address = fish.address;

const { phone, id, address, name, price } = fish;

console.log(name);
console.log(name, address);
console.log(name);
console.log(name, price);
console.log(name, id);

const company = {
    name: 'GP',
    ceo: {
        id: 1,
        name: 'akbar',
        food: 'panta vat '
    },
    web: {
        work: 'web developmet',
        employee: 30,
        floor: '4th'
    },
    dept: 'IT'
}

const { floor, work, employee } = company.web;
const { name, id, food } = company.ceo;