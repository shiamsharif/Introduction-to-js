var x = ['apple','banana','orange'];

var y = x.indexOf("banana");
console.log(y);
x[y] = "mango";
x[y+1] = "orange";
console.log(x);
x.pop();
x.push("Watermilon");
console.log(x);