const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = { id: 32, class: 14, name: "ShiamSharif" };
const friends = [51, 52, 106, 111, 108, 1630, 42];
function sum (x,y){
    return x+y;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// console.log(typeof friends);
console.log(Array.isArray(friends));
console.log(typeof sum);


console.log(friends.includes(1630));

//Concat:
const newFriends = [10,21,35];
const allFriends = newFriends.concat(friends);
console.log(allFriends);