/** using this tutorial help:
 https://www.youtube.com/watch?v=71AtaJpJHw0
 * 
 */
// fucntions which preserve data are called Closures

// Closures with inner funciton

// var addTo = function(passed) {
var addTo = function(passed) { // outer function, which returns inner function in the end;
    var add = function(inner) { // inner function, which returns some value;
        return passed + inner;
    }
    return add;
}

var addThree = addTo(3); // preserve the returned value(still, inner value hasn't passed yet);
var addFour = addTo(4); // preserve the returned value(still, inner value hasn't passed yet);

console.log(addThree(1)); // passing inner value to the add function.
console.log(addFour(1));