// Objek
let person = {
  firstName: "Glenn",
  weight: 80, // berat dalam kg
  height: 170, // tinggi dalam cm
  calculateBMI: function () {
    // Cek validitas input
    if (
      isNaN(this.weight) ||
      this.weight <= 0 ||
      isNaN(this.height) ||
      this.height <= 0
    ) {
      console.log("Masukkan input yang benar!");
      return;
    }

    // menghitung BMI
    let tinggiMeter = this.height / 100; // konversi tinggi ke meter
    let BMI = this.weight / (tinggiMeter * tinggiMeter);
    BMI = BMI.toFixed(1); // format BMI dengan 1 desimal

    // kategori BMI
    let category;
    if (BMI < 16.0) {
      category = "Severly Underweight";
    } else if (BMI >= 16.0 && BMI < 18.5) {
      category = "Underweight";
    } else if (BMI >= 18.5 && BMI < 25.0) {
      category = "Normal";
    } else if (BMI >= 25.0 && BMI < 30.0) {
      category = "Overweight";
    } else if (BMI >= 30.0 && BMI < 35.0) {
      category = "Moderately Obese";
    } else if (BMI >= 35.0 && BMI < 40.0) {
      category = "Severly Obese";
    } else {
      category = "Morbidly Obese";
    }

    // Mengembalikan hasil BMI dan kategori
    console.log("Hasil BMI: " + BMI + ", Kategori: " + category);
  },
};

person.calculateBMI();
