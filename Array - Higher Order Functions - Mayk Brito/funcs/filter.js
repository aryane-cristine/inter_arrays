const { childrenAge, mailList } = require("../data");

const childrenFiltered = childrenAge.filter(
  element => element >= 2 && element <= 11
);
const filteredMails = mailList.filter(mail => mail.includes("@rocketseat.com"));

console.table(childrenFiltered);
console.table(filteredMails);
