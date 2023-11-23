function findingBadData(array){
    let badData = 0;
    for(let i = 0; i < array.length; i++){
        let data = array[i];
        if(data < 0){
            badData++;
        } 
    }
    return badData;
}

const x = [-4, -9, -5, -33, -55];
// console.log(Array.isArray(x));
const xx = findingBadData(x);
console.log(`Output: ${xx}`);
