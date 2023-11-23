function isLGSeven(number){
    if(number < 7){
        return number - 7;
    }
    else{
        return number * 2;
    }
}

const x = isLGSeven(6);
console.log(`Output: ${x}`);

const y = isLGSeven(-15);
console.log(`Output: ${y}`);

const z = isLGSeven(15);
console.log(`Output: ${z}`);