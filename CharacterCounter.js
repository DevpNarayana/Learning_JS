function charCount(input, character) {
    var count = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] == character)
            count++;
    }
    return count;
}
console.log(charCount("BBBBs", 'B'));