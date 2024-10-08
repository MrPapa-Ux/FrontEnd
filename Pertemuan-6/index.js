// //JavaScript Array: Adalah Variabel yang dapat menyimpan banyak data
// //Deklarasi Array
// //Cara 1. Array Literal
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// //Cara 2. Kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10);
// console.log(numbers2);

// //Tipe data yang bisa disimpan dalam array
// let numbers3 = [1, 2, 3, 4, 5]; // Number
// let students = ["John", "Jane", "Bobs"]; //string
// let john = ["John", 30, true, [10, 20, 30]]; //mixed
// console.log(numbers3, students, john);

// //Array length
// console.log(numbers.length); //5
// console.log(students.lenght); //3
// console.log(john.lenght); //4

// //Mengakses array tertentu di dalam array
// //Melalui index array. index selalu dimulai 0
// console.log(numbers[2]); //3
// console.log(students[1]); //Jane
// console.log(john[2]); //true
// console.log(john[3], [1]); //90

// //Mengakses element atau data terakhir dalam array
// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers2[numbers2.lenght - 1]);

//Array method
let array = [1, 2, 3, "hallo", false, true];
console.log(array);
//1. to string
console.log(array.toString());
//2. join
console.log(array.join());
console.log(array.join(""));
console.log(array.join("-"));
//3. pop()
array.pop();
console.log(array);
//4. push
array.push("Selamat malam");
console.log(array);
//5. shift
array.shift();
console.log(array);
//6. unshift
array.unshift("selamat malam");
console.log(array);
//7. splice
array.splice(3, 1);
console.log(array); //hapus index ke 3
array.splice(3, 0, 4, 5);
console.log(array); //lalu menambahkan 4,5 di index ke 3
//8. concat
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kacang", "kenari", "almond"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);

//9. slice
let sayuran = makanan.slice(3, 6);
console.log(sayuran);
