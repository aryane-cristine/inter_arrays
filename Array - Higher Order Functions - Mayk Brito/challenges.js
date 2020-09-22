const { childrenAge, mailList, shopCart } = require("./data");

const children = childrenAge.reduce((list, age) => {
  list.push({
    age,
    birthYear: 2019 - age
  });
  return [...list];
}, []);

console.table(children)

const domains = mailList.map(mail => {
  const mailArray = mail.split("@");
  return mailArray[1];
});

console.table(domains)

const bellow100 = shopCart
  .filter(product => product.unitPrice <= 100)
  .reduce((lastProductUnitPrice, currentProduct) => {
    if (lastProductUnitPrice > currentProduct.unitPrice)
      return lastProductUnitPrice;

    return currentProduct.unitPrice;
  }, 0);

console.table(bellow100);
