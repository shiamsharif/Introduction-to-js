function maxInArray(num){
    let temp = num[0];
    for( let i=0; i<num.length; i++){ 
        if(num[0] < num[i]){
            temp = num[i];
        }
    }
    return temp;
}

const array = [167,190,120,165,137];
const tallest = maxInArray(array);
console.log('Tallest person is : ', tallest);