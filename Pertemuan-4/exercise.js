//Buatlah fungsi untuk menghitung  BMI (Body Mass Index)
//Rumusnya: BMI = berat / (tinggi * tinggi)
//berat dalam kg dan tinggi dalam meter 
//170 cm = 1.7 m
//fungsi tersebut menerima 2 parameter yaitu berat dan tinggi lalu mengembalikan output berupa BMI

function hitungBMI(berat, tinggi) {
  if (isNaN(berat) || berat <= 0 || isNaN(tinggi) || tinggi <= 0) {
    return "masukkan input yang benar!";
  }

  tinggiMeter = tinggi/100;
  
  let BMI = berat / (tinggiMeter * tinggiMeter);
  BMI = BMI.toFixed(1);
  
  return "Hasil BMI: " + BMI;
}

let berat = 50
let tinggi = 170


console.log(hitungBMI(berat, tinggi));