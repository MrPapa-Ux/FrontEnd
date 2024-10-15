// No.3 Async/Await
// a. Mengubah fungsi ambilDataUser menggunakan async/await
export { nomortigadanempat };
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

// No.4 Menggunakan Axios
// a. Mengubah fungsi ambilDataUser menggunakan Axios
async function ambilDataUser() {
  try {
    const response = await axios.get("https://reqres.in/api/users");

    response.data.data.forEach((user) => {
      console.log(
        "First Name: " + user.first_name + ", Last Name: " + user.last_name
      );
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

ambilDataUser();
