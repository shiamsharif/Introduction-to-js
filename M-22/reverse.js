// function reversewords(str){
//     const word = str.split(' ');
//     const result = [];
//     for(let i = word.length; i> 0; i--){
//         const element = word[i-1];
//         result.push(element);
//     }
//     const reverse = result.join(' ');
//     return reverse;
// }

// const x = "Shiam sharif is a Developer";
// const r = reversewords(x);

// console.log(r);

function reverseWords(str) {
  const words = str.split(" ");
  const reversedWords = [];

  for (let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words[i]);
  }

  const reversedString = reversedWords.join(" ");
  return reversedString;
}

const inputString = "Shiam sharif is a Developer";
const reversedString = reverseWords(inputString);

console.log(reversedString); // Output: Developer is a sharif Shyam
