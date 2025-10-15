const numbers = [1, 2, 33, 4, 5];

const sum = numbers.reduce((svar, anka) => svar + anka, 0);

const maxNumber = numbers.reduce((svar, anka) => {
  return anka > svar ? anka : svar;
}, numbers[0]);

const fruits = ["äpple", "päron", "äpple", "banan"];

const occurances = fruits.reduce((svar, anka) => {
  svar[anka] = (svar[anka] || 0) + 1;
  return svar;
}, {});
