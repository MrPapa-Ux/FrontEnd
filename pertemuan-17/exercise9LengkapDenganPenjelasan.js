// No.1 Promise
// a. Membuat function helloWorld yang mengembalikan Promise
function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!"); // Mengirimkan nilai "Hello World!" setelah 2 detik
    }, 2000); // Durasi timeout 2000ms atau 2 detik
  });
}

// b. Membuat async function bernama messages
async function messages() {
  const msg = await helloWorld(); // Menunggu hasil dari helloWorld()
  console.log(msg); // Menampilkan "Hello World!" di console
}

// c. Memanggil function messages
messages();

// No.2 Fetch
// a. Membuat function ambilDataUser
function ambilDataUser() {
  // b. Menggunakan fetch() untuk mengambil data dari API
  fetch("https://reqres.in/api/users")
    // c. Menggunakan .then() pertama untuk memproses response menjadi JSON
    .then((response) => {
      return response.json(); // Mengembalikan hasil response sebagai JSON
    })
    // d. Menggunakan .then() kedua untuk menampilkan data "first_name" dan "last_name"
    .then((users) => {
      users.data.forEach((user) => {
        console.log(
          "First Name: " + user.first_name + ", Last Name: " + user.last_name
        ); // Menggunakan konkatenasi string
      });
    })
    // Menambahkan .catch() untuk menangani error jika ada
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// e. Memanggil function ambilDataUser
ambilDataUser();

// No.3 Async/Await
// a. Mengubah fungsi ambilDataUser menggunakan async/await
async function ambilDataUser() {
  try {
    // Mengambil data dari API menggunakan await
    const response = await fetch("https://reqres.in/api/users");

    // Mengonversi response menjadi JSON
    const users = await response.json();

    // Menampilkan first_name dan last_name dari setiap user
    users.data.forEach((user) => {
      console.log(
        "First Name: " + user.first_name + ", Last Name: " + user.last_name
      ); // Menggunakan konkatenasi string
    });
  } catch (error) {
    // Menangani jika terjadi error
    console.error("Error fetching data:", error);
  }
}

// Memanggil function ambilDataUser
ambilDataUser();

// No.4 Menggunakan Axios
// a. Mengubah fungsi ambilDataUser menggunakan Axios
async function ambilDataUser() {
  try {
    // Mengambil data dari API menggunakan Axios
    const response = await axios.get("https://reqres.in/api/users");

    // Menampilkan first_name dan last_name dari setiap user
    response.data.data.forEach((user) => {
      console.log(
        "First Name: " + user.first_name + ", Last Name: " + user.last_name
      ); // Menggunakan konkatenasi string
    });
  } catch (error) {
    // Menangani jika terjadi error
    console.error("Error fetching data:", error);
  }
}

// Memanggil function ambilDataUser
ambilDataUser();
