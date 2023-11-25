// const numbers = [45,65,23,98,19];

// // for(let i =0; i<numbers.length; i++){
// //     const number = numbers[i];
// //     console.log(number);
// // }

// for(const number of numbers){
//     console.log(number);
// }

const products = [
    {id:1, name: 'iphone' , price: 119000},
    {id:2, name: 'oppo' , price: 35000},
    {id:3, name: 'nokia' , price: 29000},
    {id:4, name: 'One plus' , price: 49000},
    {id:5, name: 'realme' , price: 19000},
    {id:6, name: 'walton' , price: 1100},
    {id:7, name: 'mac' , price: 189000},
];

function matchProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchProducts(products, 'mac');
console.log(result);