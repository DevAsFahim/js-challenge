
// 3.Task: Function Composition
const square = (num) => {
  return num * num;
}

const double = (num) => {
  return num * 2;
}

const addFive = (num) => {
  return num + 5;
}

const processNumber = (num) => {
  const squared = square(num);
  const doubled = double(squared);
  return addFive(doubled);
}

console.log(processNumber(3));