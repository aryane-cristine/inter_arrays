const { passengers } = require("../data");

const newPassergers = passengers.map(
  passenger => `${passenger.name} tem ${2019 - passenger.birthYear} anos`
);

const founds = passengers.map(passenger => {
  const reserveName = [].map
    .call(passenger.name, letter => letter)
    .reverse()
    .join("");

  if (reserveName.toLowerCase() === passenger.name.toLowerCase())
    return `This is palindromo: ${passenger.name}`;
});

console.table(newPassergers);
console.table(founds);
