var rowSize = 16;
var columnSize = 16;
var outputStream = '';
for (var i = 0; i < rowSize; i++) {
    if (i % 2 == 0) {
        for (var j = 0; j < columnSize; j++) {
            outputStream += (j % 2 == 0) ? '#' : ' ';
        }
    } else {
        for (var j = 0; j < columnSize; j++) {
            outputStream += (j % 2 == 0) ? ' ' : '#';
        }
    }
    console.log(outputStream);
    console.log('\n');
    outputStream = '';
}