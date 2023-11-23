function publicBusFare(public){
    if(public % 50 === 0){
        const busRemaining = public % 50;
        console.log("Output : 0.00 TK");
    }
    else if(public % 50 !== 0){
        const busRemaining = public % 50;
        if(busRemaining % 11 === 0 ){
            console.log("Output : 0.00 TK");
        }
        else{
            const microbusRemaining = busRemaining % 11;
            const totalFare = microbusRemaining * 250;
            console.log(`Output: ${totalFare}.00 TK`);
        }
    }
}

publicBusFare(129);


