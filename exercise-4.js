function cariModus(arr) {
    //Buat array yang diisi dengan nilai pada arr tapi tanpa duplikat
    //Jika nilai unik hanya 1, return -1
    var uniqueArr = [...new Set(arr)];
    if(uniqueArr.length < 2) {
        return -1;
    }

    /* Buat array (countArr) sepanjang uniqueArr yang diisi dengan jumlah kemunculan angka pada indeks yang sama
    sehingga kita memiliki nilai serta jumlah kemunculannya pada indeks yang sama di 2 array berbeda.
    Jika jumlah kemunculan angka terbanyak hanya satu, return 1. Jika tidak,
    cari indeks (paling awal jika lebih dari satu) pada countArr yang memiliki nilai kemunculan angka terbanyak,
    kemudian return nilai pada uniqueArr dengan indeks tersebut */
    var countArr = [];
    for(var i = 0; i < uniqueArr.length; i++) {
        countArr[i] = 0;
    }
    var uniqueIndex = 0;
    var countMax = 0;
    for(var i = 0; i < arr.length; i++) {
        uniqueIndex = uniqueArr.indexOf(arr[i]);
        countArr[uniqueIndex] += 1;
        if(countMax < countArr[uniqueIndex]) {
            countMax = countArr[uniqueIndex];
        }
    }
    if(countMax === 1) {
        return -1;
    }
    
    return uniqueArr[countArr.indexOf(countMax)];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1