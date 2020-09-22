const { shopCart } = require("../data");

const totalValue = shopCart.reduce(
  (acc, item) => acc + item.quantity * item.unitPrice,
  0
);

const totalProducts = shopCart.reduce(
  (totalProduct, product) => totalProduct + product.quantity,
  0
);

console.table(totalValue);
console.table(totalProducts);
