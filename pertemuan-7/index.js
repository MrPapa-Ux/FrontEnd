// Javascript Object and Conditional
let john = {
  firstName: "John",
  age: 30,
  isMarried: true,
  grade: [80, 90, 100],
  sayGreetings: function () {
    console.log("Hello my name is", this.firstName);
  },
};

console.log(john);

// Mengakses properti dalam objek
// 1. Melakukan Notasi
console.log(john.firstName); // john
console.log(john.age); // 30
john.age = 31; // Ubah nilai
john.job = "Teacher"; // Menambah properti baru
console.log(john);

// 2. Notasi Bracket
console.log(john["isMarried"]); // true
john["kewarganegaraan"] = "Indonesian"; // Tambah properti baru
console.log(john);

// Objek Method
john.sayGreetings();

// Objek didalam objek
// Misalkan kita menambahkan alamat terlebih dahulu
john.address = {
  city: "Jakarta",
};
console.log(john.address.city); // Jakarta

// Delete properti objek
delete john.grade;
console.log(john);

// JavaScript conditional
// 1. if - else
let temp = 37;
if (temp >= 37) {
  console.log("Cuaca hari ini panas");
} else {
  console.log("Cuaca hari ini dingin");
}

// 2. if - else - if - else
let nilai = 40;
if (nilai >= 80 && nilai <= 100) {
  console.log("Grade A");
} else if (nilai >= 70 && nilai < 80) {
  // perbaikan di sini
  console.log("Grade B");
} else if (nilai >= 50 && nilai < 70) {
  // perbaikan di sini
  console.log("Grade C");
} else {
  console.log("Grade D"); // perbaikan di sini
}

console.log(nilai);

// Switch case
let month = 12; // Mengganti dari 'swicth' ke 'switch'
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2: // perbaikan di sini
    console.log("February");
    break;
  case 3: // perbaikan di sini
    console.log("March");
    break;
  case 4: // perbaikan di sini
    console.log("April");
    break;
  default: // Tambahkan default untuk menangani kasus lain
    console.log("Bulan tidak ditemukan");
}
