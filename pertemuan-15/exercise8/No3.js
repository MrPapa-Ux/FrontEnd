export { phi };
//3.
const phi = 3.14;

const calculateArea = (obj) => phi * Math.pow(obj.radius, obj.power);

let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
