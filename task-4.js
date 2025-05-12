// 4.Task: Sorting Objects

const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2020 },
  { make: "Chevrolet", model: "Malibu", year: 2016 },
];

const sortCarsByYear = (carArray) => carArray.sort((a, b) => a.year - b.year);

console.log(sortCarsByYear(cars));
