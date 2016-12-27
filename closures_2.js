function multiplier(factor) {
    return function(number) {
        return factor * number
    }
}
var twice = multiplier(5);
console.log(twice(2));


// console.log(multiplier(5));
