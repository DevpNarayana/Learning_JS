var myArray = [{ name: 'banana', number: 7 },
    { name: 'apple', number: 1 }, { name: 'cabbage', number: 2 }, { name: 'orange', number: 5 }
];

// controlling sort function either from top to bottom or reverse w.r.t name 
myArray.sort(function(a, b) {
    if (a.name < b.name) {
        return -1;
    } else {
        return 1;
    }
});

console.log(myArray);

// controlling sort function either from top to bottom or reverse w.r.t number
// myArray.sort(function(a, b) {
//     if (a.number > b.number) {
//         return -1;
//     } else {
//         return 1;
//     }
// });

// console.log(myArray);