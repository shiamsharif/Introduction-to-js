const  student = {
    name: 'sakib khan',
    id: 121,
    address:'movie cinema',
    isSingle : true,
    friends: ['apu', 'Raz', 'Salman', 'shiam'],
    movies : [
        {name : 'no. 1', year:2015},
        {name : 'king khan', year : 2018}
    ],
    act : function(){
        console.log("ShiamSharif");
    },
    car: {
        brand: 'tesla',
        price: 500000000,
        mode: 2324,
        manufacturer : {
            name : 'Tesla',
            CEO : 'Elon Mask',
            Country : 'USA'
        }
    }

}

console.log(student)
console.log(student.car)
console.log(student.car.manufacturer)