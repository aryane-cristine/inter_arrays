const { passengers } = require("../data");

passengers.forEach(passenger => {
  passenger.age = 2019 - passenger.birthYear;
});

console.table(passengers);
