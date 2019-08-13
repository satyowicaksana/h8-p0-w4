function arrayOfAlphabet(num) {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var arrResult = [];

    for(var i = 0; i < num; i++) {
        arrResult[i] = [];
        for(var j = 0; j < num; j++) {
            arrResult[i].push(alphabet[(i * num + j) % 26]);
        }
    }
    return arrResult;
}

// TEST CASES
console.log(arrayOfAlphabet(6)); // 2
console.log(arrayOfAlphabet(90)); // 3
console.log(arrayOfAlphabet(20)); // 2
console.log(arrayOfAlphabet(179)); // 4
console.log(arrayOfAlphabet(1)); // 2