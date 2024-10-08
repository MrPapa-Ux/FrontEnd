//Contoh dari konsep destructing:

//-Destructuring pada Array dan Object-
// 1. Destructuring pada Array:
const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// 2. Destructuring pada Object:
const orang = { nama: "John", umur: 32 };
const { nama, umur } = orang;
console.log(nama);
console.log(umur);

//-Destructuring dengan mengambil sebagian item-
// 1. Array Destructuring (mengambil sebagian item):
const [x, , z] = [1, 2, 3];
console.log(x);
console.log(z);

// 2. Object Destructuring (mengambil sebagian properti):
const orang2 = { nama: "John", umur: 32, kota: "New York" };
const { nama: name, kota } = orang2;
console.log(name);
console.log(kota);

//-Destructuring dengan nilai default-
// 1. Array Destructuring dengan nilai default:
const [c = 5, d = 10] = [1];
console.log(c);
console.log(d);

// 2. Object Destructuring dengan nilai default:
const orang3 = { nama: "John" };
const { nama: name2, umur: age = 25 } = orang3;
console.log(name2);
console.log(age);

//-Destructuring dengan Rest Operator-
// 1. Array Destructuring dengan Rest Operator:
const [e, f, ...rest] = [1, 2, 3, 4, 5];
console.log(e);
console.log(f);
console.log(rest);

// 2. Object Destructuring dengan Rest Operator:
const orang4 = { nama: "John", umur: 32, kota: "New York" };
const { nama: name3, ...lainnya } = orang4;
console.log(name3);
console.log(lainnya);

// Menggunakan konsep destructuring di exercise6:
// 1.
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} pensiun dalam ${retirement} tahun`);
  } else {
    console.log(`${firstName} sudah pensiun.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: "John" });

// 2.
const addNumber = (...numbers) => {
  let sum = 0;
  numbers.forEach((item) => (sum += item));
  return sum;
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3.
const phi = 3.14;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(
  `Luas dengan radius 21: ${area21}, dan luas dengan radius 7: ${area7}`
);

// 4.
const makeAjaxRequest = (url, method = "GET") => {
  console.log(url, method);
};

makeAjaxRequest("www.google.com");
