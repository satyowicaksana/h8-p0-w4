function fpb(angka1, angka2) {
    var min = Math.min(angka1, angka2);
    var max = Math.max(angka1, angka2);

    /* Assign nilai pembagi dengan nilai terkecil antara 2 angka.
    Selama pembagi tidak habis membagi angka1 dan angka2 kurangi pembagi dengan 1 */
    var divider = min;
    while((max % divider !== 0) || (min % divider !== 0)) {
        divider -= 1;
    }
    return divider;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
console.log(fpb(1, 1)); // 1