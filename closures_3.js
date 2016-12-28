/** using this tutorial help:
 https://www.youtube.com/watch?v=71AtaJpJHw0
 * 
 */

// Closures without inner funciton
// because of lexical scoping, variables defined outside the functions can be accessed inside the functions.
// so, the below code works.
var passed = 3;
// var addTo = function(passed) {
var addTo = function() {
    var inner = 2;

    return passed + inner;
}

console.dir(addTo());
var passed = 4;
console.dir(addTo());