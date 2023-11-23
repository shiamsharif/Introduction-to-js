function oilPrice(diesel,petrol,octaen){
    const price = ((diesel*114)+(petrol*130)+(octaen*135));
    console.log(price);
}

oilPrice(10,5,3);

oilPrice(10,0,0);