// degree = radian * (180/pi)
// where, pi = 22/7

function radianToDegree(radian){
    const pi = 22/7;
    const degree = radian * (180/pi);
    return degree;
}

const x = radianToDegree(20);
console.log(x);