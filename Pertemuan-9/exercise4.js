//Exercise 4
let people = ["Greg", "Mary", "Devon", "James"];

// 1. Using a for-loop, iterate through this array and console.log all of the people.
console.log("1. Output dari for-loop:");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. Using a forEach(), iterate through this array and console.log all of the people.
console.log("2. Output dari forEach:");
people.forEach((person) => {
  console.log(person);
});

// 3. Write the command to remove "Greg" from the array.
console.log("3. Output dari menghapus Greg:");
people.shift();
console.log(people);

// 4. Write the command to remove "James" from the array.
console.log("4. Output dari menghapus James:");
people.pop();
console.log(people);

// 5. Write the command to add "Matt" to the front of the array.
console.log("5. Output dari menambahkan Matt:");
people.unshift("Matt");
console.log(people);

// 6. Write the command to add your name to the end of the array.
console.log("6. Output dari nama saya:");
people.push("Glenvidi");
console.log(people);

// 7. Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
console.log("7. Output sampai Mary:");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

// 8. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
console.log("8. Output tanpa Mary dan Matt:");
let peopleCopy = people.slice(2);
console.log(peopleCopy);

// 9. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Matt", "Mary", "Elizabeth", "Artie", "Your Name"].
people = ["Greg", "Mary", "Devon", "James"];
console.log("9. Output setelah mengganti Devon dengan Elizabeth dan Artie:");
people.splice(2, 1, "Elizabeth", "Artie");
people.push("Glenvidi");
console.log(people);

// 10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
console.log("10. Output setelah menambahkan Bob:");
let withBob = people.concat("Bob");
console.log(withBob);

//OBJECT EXERCISE
console.log("123 OBJECT EXERCISE 123");

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// 1. Write the command to add the language "Go" to the end of the languages array.
console.log("1. Output setelah menambah Go:");
programming.languages.push("Go");
console.log(programming.languages);

// 2. By using the bracket notation, change the difficulty to the value of 7.
console.log("2. Output setelah mengubah difficulti menjadi 7:");
programming["difficulty"] = 7;
console.log(programming.difficulty);

// 3. Using the delete keyword, write the command to remove the jokes key from the programming object.
console.log("3. Output setelah menghapus jokes:");
delete programming.jokes;
console.log(programming);

// 4. By using the dot notation, write the command to add a new key called isFun and a value of true to the programming object.
console.log("4. Output setelah menambah isFun:");
programming.isFun = true;
console.log(programming);

// 5. Using a map(), iterate through the languages array and update each element to be "0 - JavaScript, 1 - Python, …", where 0 represents the index of the array, and console.log the output.
console.log("5. Output dari map dengan index:");
let mappedLanguages = programming.languages.map(
  (language, index) => `${index} - ${language}`
);
console.log(mappedLanguages);

console.log("SELESAI");
