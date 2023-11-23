const people1 =[
    {name:'Devid j malan',friend:'Shiam'}
]

const people2 =[
    {name:'Shiam',friend:'Sharif'}
]

function isBestFriend(people1, people2){
    if((people1.name === people2.friend) && (people2.name === people1.friend)){
        console.log("True");
    }
    else{
        console.log("False");
    }
}

isBestFriend(people1,people2);