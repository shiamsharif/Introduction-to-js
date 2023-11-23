function gemsToDiamond(num1,num2,num3){
    let x =  ((num1*21) + (num2*32) + (num3*43));
    if(x > 2000){
        x = x - 2000;
    }
    return x;
}

let x = gemsToDiamond(20, 200, 50);
console.log(`Output: ${x}`);

