const x = "tumi bondhu kala pakhi. ami jeno ki. boshontow kale tomai bolte pari nai";

const doesExist = x.includes('pakhi');  //search string or character.
console.log(x.indexOf('ami')); //number of index
// console.log(doesExist);

const sentences = x.split('')
// console.log(sentences);

const partial = x.slice(5,8)
console.log(partial);