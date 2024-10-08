//1.
export { yearUntilRetirement };
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = (object) => {
  let age = calculateAge(object.year);
  let retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${object.firstName} retires in ${retirement} years`);
  } else {
    console.log(`${object.firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: "John" });
