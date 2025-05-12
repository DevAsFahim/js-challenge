// 1. Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Aysha", age: 25, gender: "female" },
  { name: "Fahim", age: 30, gender: "male" },
  { name: "Fathema", age: 22, gender: "female" },
  { name: "Ujjol", age: 28, gender: "male" },
  { name: "Humayra", age: 28, gender: "female" },
  { name: "Saleh", age: 28, gender: "male" },
];

const getNonFemaleNames = (peopleArray) => {
  return peopleArray
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

const result = getNonFemaleNames(people);
console.log(result);
