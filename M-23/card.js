const cards = [
  { name: "shoe", price: 1200, qunatity: 2 },
  { name: "shoe", price: 2200, qunatity: 5 },
  { name: "shoe", price: 3700, qunatity: 4 },
  { name: "shoe", price: 600, qunatity: 3 },
];

function totalCost(cards) {
  let sum = 0;
  for (let i = 0; i < cards.length; i++) {
    const product = cards[i];
    const grandTotal = product.price * product.qunatity;
    sum = sum + grandTotal;
  }
  return sum;
}

const total = totalCost(cards);
console.log(total);
