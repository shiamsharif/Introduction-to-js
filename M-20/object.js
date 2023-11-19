var student = {
  id: 41220100032,
  name: "Shiam sharif",
  year: "2nd",
  group: "cse",
};

var computer = {
  //keys: "values",
  brand: "apple",
  price: 35000,
  color: "silver",
};

// console.log(student);
var x = computer["apple"];

var pname = "brand";

var pvalue = computer[pname];
console.log(pname, pvalue);

//keys:
var properties = Object.keys(computer);
// console.log(properties);

// values:
var properties = Object.values(computer);
// console.log(properties);


//set property values:
computer.mouse = 15;
// console.log(computer)

for (var pname in computer){
    consol.log(pname)
}