var x = ['a','b','c','d','e'];

for(var i=0; i<x.length; i+=1){
    if(x[i] == 'c'){
        continue;
    }
    if(x[i] == 'd'){
        break;
    }
    console.log(x[i]);
}