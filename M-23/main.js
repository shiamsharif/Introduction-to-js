const phones = [
    {name:'iphone',camera:12, storage:'32gb',price: 80000,colour:'silver'},
    {name:'a',camera:12, storage:'32gb',price: 36000,colour:'silver'},
    {name:'b',camera:12, storage:'256gb',price: 22000,colour:'silver'},
    {name:'c',camera:12, storage:'32gb',price: 26000,colour:'silver'},
    {name:'d',camera:12, storage:'64gb',price: 45000,colour:'silver'},
    {name:'e',camera:12, storage:'128gb',price: 60000,colour:'silver'},
]

function chepestPhone(phones){
    let chapest = phones[0];
    for(let i =0; i<phones.length; i++){
        const phone = phones[i];
        if(phone.price < chapest.price){
            chapest = phone;
        }
    }
    return chapest;
}

const x = chepestPhone(phones);
console.log(x);
