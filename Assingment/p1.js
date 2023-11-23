function mindGame(number){
    if(number < 0){
        console.log("Not positive number.");
        return;
    }
    else{
        return ((((number*3)+10)/2)-5);
    }
}

const x = mindGame(-5);
console.log(x);


const y = mindGame(50);
console.log(y);


const z = mindGame(33);
console.log(z);