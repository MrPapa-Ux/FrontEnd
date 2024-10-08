// 1. String Literal
let fullName = "Johny John";
let age = 30;
let address = "Manado";

// Halo nama saya John Doe, umur saya 30 tahun
// dan saya tinggal di Manado
let kalimat1 =
  "Halo nama saya " +
  fullName +
  ", umur saya " +
  age +
  " tahun dan saya tinggal di " +
  address;
console.log(kalimat1);

let kalimat2 = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`;
console.log(kalimat2);

// 2. Arrow functions
function sayGreetings1(fullName) {
  return `Hello my name is ${fullName}`;
}
console.log(sayGreetings1("John Dow"));

// Penggunaan tanpa tutup kurung di bawah untuk mempersingkat
const sayGreetings2 = (fullName) => `Hello my name is ${fullName}`;
console.log(sayGreetings2("John Dow"));

// Arrow Function pada IIFE
let output1 = (() => "Hello")();
console.log(output1);

// Arrow Function pada Callback function
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

// 3. Default Parameter function
const sayGreetings3 = (fullName, age) => {
  if (!age) {
    age = 30;
  }
  if (!address) {
    address = "Manado";
  }
  console.log(
    "Hallo nama saya ${fullName}, umur saya${age}, dan saya tinggal di ${address}"
  );
};

sayGreetings3("Glenkun", 35, "Pineleng");

const sayGreetings4 = ((fullName = "John Doe"), (age = 30), address);
console.log(
  "Halo nama saya ${fullName}, umur saya${age} dan tempat kelahiran saya ${address}"
);
