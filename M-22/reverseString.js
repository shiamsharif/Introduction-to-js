function reverseString(string) {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    const temp = string[i];
    reverse = reverse + temp;
    // console.log(temp, reverse);
  }
}

// function shiamReverse(str) {
//   let temp = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     temp = str[i];
//   }
//   return temp;
// }

const x = "shiam";
const reverseX = reverseString(x);
console.log(reverseX);

// const s = shiamReverse(x);
// console.log(s);
