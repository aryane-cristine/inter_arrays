const { shopCart, passengers } = require("../data")

const orderByTotalProducts = shopCart.sort((a, b) => b.quantity - a.quantity)

const orderByPassengerName = passengers.sort((pa, pb) => {
  if (pa.name.toLocaleLowerCase() < pb.name.toLocaleLowerCase()) return -1
  if (pa.name.toLocaleLowerCase() > pb.name.toLocaleLowerCase()) return 1
  return 0;
})

console.table(orderByTotalProducts)
console.table(orderByPassengerName)
