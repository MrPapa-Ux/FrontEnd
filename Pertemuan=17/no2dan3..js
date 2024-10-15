export { nomorduadantiga };
// No.2 Fetch
// a. Membuat function bernama ambilDataUser
function ambilDataUser() {
  // b. Menggunakan Promise dan fetch() untuk mengambil data dari API
  return new Promise((resolve, reject) => {
    // c. Menggunakan fetch() dengan end-point API "https://reqres.in/api/users" lalu menggunakan .then() pertama dengan callback function yang memiliki argumen response
    fetch("https://reqres.in/api/users")
      .then((response) => {
        return response.json();
      })
      // d. Menambahkan .then() kedua dengan callback function yang memiliki argumen bernama users
      .then((users) => {
        users.data.forEach((user) => {
          console.log(
            "First Name: " + user.first_name + ", Last Name: " + user.last_name
          );
        });
        resolve(users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        reject(error);
      });
  });
}

// e. Memanggil function ambilDataUser di luar blok kode function ambilDataUser
ambilDataUser()
  .then((users) => {
    console.log("Data berhasil diambil:", users);
  })
  .catch((error) => {
    console.error("Promise error:", error);
  });

ambilDataUser()
  .then((users) => {
    console.log("Data berhasil diambil:", users);
  })
  .catch((error) => {
    console.error("Promise error:", error);
  });

ambilDataUser();

// No.3 Async/Await
// a. Mengubah fungsi ambilDataUser menggunakan async/await
async function ambilDataUser() {
  try {
    const response = await fetch("https://reqres.in/api/users");

    const users = await response.json();

    users.data.forEach((user) => {
      console.log(
        "First Name: " + user.first_name + ", Last Name: " + user.last_name
      );
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

ambilDataUser();
