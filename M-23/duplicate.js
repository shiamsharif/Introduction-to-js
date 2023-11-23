const names = [
  "shawon",
  "shiam",
  "noman",
  "habib",
  "anik",
  "shiam",
  "mahadi",
  "habib",
  "noman",
  "shiam",
];

function removeDuplicate(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}

const x = removeDuplicate(names);
console.log(x);
