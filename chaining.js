//declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
console.log(x, b);

//destructureing array
const [p, q] = [45, 90, 87, 37];
console.log(p, q);

const [best, worst] = ['laura', 'launda', 'kauwa'];
console.log(best, worst);
const { sky, soil, color } = { sky: 'blue', soil: 'mati', color: 'red', money: '500' }

// chaining 
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'akbar', food: 'panta vat ' },
    web: {
        work: 'web developmet',
        employee: 30,
        floor: '4th',
        tech: { first: 'html', second: 'css', third: 'js' },
        hex: 'hex'
    }

}

console.log(company ? .web ? .tech ? .second);
// console.log(company ? .backend ? .tech ? .third);