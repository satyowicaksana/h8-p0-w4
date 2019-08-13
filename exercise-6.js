function digitPerkalianMinimum(angka) {
    var digit = '';
    var countMin = Infinity;

    /* Loop semua angka dari 1 sampai hasil bagi angka dengan 2 (setengahnya) untuk kemungkinan pembagi,
    bulatkan ke atas agar memastikan semua kemungkinan pembagi masuk (menangani test case input 1).
    Jika ada angka i habis membagi angka input, masukkan angka i dan hasil baginya
    ke sebuah string dan hitung panjang string tersebut.
    Simpan panjang string yang paling kecil selama loop dilakukan */
    for(var i = 1; i <= Math.ceil(angka / 2); i++) {
        if(angka % i === 0){
            // console.log(i);
            // console.log(angka / i);
            digit = String(i) + (angka / i);
            // console.log(digit);
            if(countMin > digit.length) {
                countMin = digit.length;
            }
        }
    }
    return countMin;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2