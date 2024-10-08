//Asyncronus JS

//Syncronus -> single thread -> blocking
console.log("Proses 1");
console.log("Proses 2");
console.log("Proses 3");
console.log("Proses 4");

//Asyncronus -> multiple thread -> non-blocking
//1. Parallel
setTimeout(() => {
  console.log("Proses 1");
}, 3000);
console.log("Proses 2");
setTimeout(() => {
  console.log("Proses 3");
}, 3000);
console.log("Proses 4");

// Concurrent
setTimeout(() => {
  console.log("Proses 1");
  setTimeout(() => {
    console.log("Proses 2");
    setTimeout(() => {
      console.log("Proses 3");
      setTimeout(() => {
        console.log("Proses 4");
      }, 3000); // Menunggu 3 detik untuk Proses 4
    }, 3000); // Menunggu 2 detik untuk Proses 3
  }, 3000); // Menunggu 1 detik untuk Proses 2
}, 3000); // Menunggu 0.5 detik untuk Proses 1

//Promise
//Buat Promise sederhana4
//1. Then - Catch

// Pakai Promises yang sudah ada
//1. fetch
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

//Mofification with async awai
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
