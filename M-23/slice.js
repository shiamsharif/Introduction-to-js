const friends = [51, 52, 32, 42, 111, 108, 1630, 106];

const partial = friends.slice(2, 5); //slice()
const bug = friends.splice(1,3, 32,42,52);  //splice()

console.log(partial);   //Output: [ 32, 42, 111 ]
console.log(bug);   //Output: [ 51, 32, 42 ]

console.log(friends); // O/P: [51,  32,  42,52, 111, 108,1630, 106]
