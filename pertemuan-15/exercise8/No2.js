export { addNumber };
//2.
const addNumber = (a, b, c, d, e, f, g) => {
  const numbers = [a, b, c, d, e, f, g];
  let sum = 0;
  numbers.map((item) => (sum += item));
  return sum;
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));
