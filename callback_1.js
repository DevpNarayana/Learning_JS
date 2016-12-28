/**
 * callback functions using this source: 
 * https://www.youtube.com/watch?v=pTbSfCT42_M
 */


// normal way

// var calc = function(x, y, calcType) {
//     if (calcType === 'add') {
//         return x + y;
//     } else if (calcType === 'substract') {
//         return x - y;
//     } else if (calcType === 'multiply') {
//         return x * y;
//     } else if (calcType === 'divide') {
//         return x / y;
//     }
// }

// console.log(calc(2, 3, 'add'));
// console.log(calc(2, 3, 'substract'));
// console.log(calc(2, 3, 'multiply'));
// console.log(calc(2, 3, 'divide'));

// best way is to pass the function as argument
var add = function(x, y) {
    return x + y;
}

var multiply = function(x, y) {
    return x * y;
}

var substract = function(x, y) {
    return x - y;
}

var divide = function(x, y) {
    return x / y;
}

// main function
var calc = function(x, y, myFunc) {
    if (typeof myFunc === "function") {
        return myFunc(x, y);
    }

}

console.log(calc(2, 3, add));
console.log(calc(2, 3, substract));
console.log(calc(2, 3, multiply));
console.log(calc(2, 3, divide));

console.log("callback with anonymous functions");
// callback with anonymous functions
console.log(calc(2, 3, function(a, b) { return a + b }));
console.log(calc(2, 3, function(a, b) { return a - b }));
console.log(calc(2, 3, function(a, b) { return a * b }));
console.log(calc(2, 3, function(a, b) { return a / b }));