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

//2. Concurrent
