function farmInventory(cows, chickens) {
    console.log(padZeros(cows, 3) + " Cows");
    console.log(padZeros(chickens, 3) + " Chicken");
    // var cowsString = String(cows);
    // while (cowsString.length < 3) {
    //     cowsString = "0" + cowsString;
    // }
    // console.log(cowsString + " Cows");
    // var chickenString = String(chickens);
    // while (chickenString.length < 3) {
    //     chickenString = "0" + chickenString;
    // }
    // console.log(chickenString + " Chicken");
}

function padZeros(number, width) {
    var itemString = String(number);
    while (itemString.length < width) {
        itemString = "0" + itemString;
    }
    return itemString;
}
console.log(farmInventory(25, 15));