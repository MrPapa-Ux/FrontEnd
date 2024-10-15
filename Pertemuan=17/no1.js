// No.1 Promise
// a. Membuat function helloWorld yang mengembalikan Promise
export { nomorsatu };
function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}
