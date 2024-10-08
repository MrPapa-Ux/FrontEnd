//Ubah exercise pertama ttg BMI menggunakan IIFE dan Callback
// function hitungBMI(berat, tinggi) {
//     if (isNaN(berat) || berat <= 0 || isNaN(tinggi) || tinggi <= 0) {
//       return "masukkan input yang benar!";
//     }
//     tinggiMeter = tinggi/100;
//     let BMI = berat / (tinggiMeter * tinggiMeter);
//     BMI = BMI.toFixed(1);
//     return "Hasil BMI: " + BMI;
//   }
//   let berat = 50
//   let tinggi = 170
//   console.log(hitungBMI(berat, tinggi));

(function(berat, tinggi, callback) {
    if (isNaN(berat) || berat <= 0 || isNaN(tinggi) || tinggi <= 0) {
        callback("Masukkan input yang benar!");
        return;
    }

    let tinggiMeter = tinggi / 100;
    let BMI = berat / (tinggiMeter * tinggiMeter);
    BMI = BMI.toFixed(1);

    callback("Hasil BMI: " + BMI);
})(50, 170, function(hasil) {
    console.log(hasil);
});
