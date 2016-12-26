var limitingNumber = 100;
var count = 1;
while (count < limitingNumber) {
    var output = "";
    if (count % 3 == 0) {
        output = "fizz";
    }
    if (count % 5 == 0) {
        output += "buzz";
    }
    console.log(output);
    count++;
}