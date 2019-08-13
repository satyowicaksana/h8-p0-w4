/* 
    ===================
    Two Array Operation
    ===================
    Buatlah sebuah Program yang dapat mengoperasikan bilangan - bilangan yang ada
    didalam 2 buah array sesuai dengan masing - masing indexnya.
    [INSTRUCTION]
    diberikan 2 buah array yang akan dioperasikan 
    - jika bilangan tersebut berada pada index yang genap, maka tambahkan (+)
    bilangan pada index array yang ke satu dengan index array yang ke dua 
    - jika bilangan tersebut berada pada index yang ganjil, maka kurangkan (-)
    bilangan pada index array yang ke satu dengan index array yang ke dua 
    - jika panjang ke dua array tidak sama , 
    maka masukkan masukkan angka 0 sebagai pengganti value yang tidak ada.
    [EXAMPLE]
    twoArrayOperation([1,2,3],[1,2,3])
    array1 : [1, 2, 3]
              +  -  +
    array2 : [1, 2, 3]
    result : [2, 0, 6]
    twoArrayOperation([12,34,11,23],[11,78,45,20])
    array1 : [12, 34, 11, 23]
               +   -   +   -
    array2 : [11, 78, 45, 20]
    result : [23,-44, 56, 3]
    twoArrayOperation([-4, 5, 57, 33, -90],[4, 2, 54, 24, 34, 17])
    array1 : [-4, 5, 57, 33, -90]
              +   -   +   -    +   -
    array2 : [4,  2, 54, 24,  34, 17]
    result : [0,  3, 111, 9, -56, -17]
*/

function twoArrayOperation(arr1, arr2) {
    var arrResult = [];
    var longerArr;
    var shorterArr;
    if(arr1.length > arr2.length) {
        longerArr = arr1;
        shorterArr = arr2;
    } else {
        longerArr = arr2;
        shorterArr = arr1;
    }
    for(var i = 0; i < longerArr.length; i++) {
        if(i > shorterArr.length - 1) {
            shorterArr[i] = 0;
        }
        if(i % 2 === 0) {
            arrResult.push(arr1[i] + arr2[i]);
        } else {
            arrResult.push(arr1[i] - arr2[i]);
        }
    }
    return arrResult;
}

console.log(twoArrayOperation([-4, 5, 57, 33, -90], [4, 2, 54, 24, 34])) // [ 0, 3, 111, 9, -56]
console.log(twoArrayOperation([12, 34, 11, 23, 12], [11, 78, 45, 20, 42])) // [ 23, -44, 56, 3, 54 ]
console.log(twoArrayOperation([1, 2, 3], [1, 2, 3])) // [ 2, 0, 6 ]
console.log(twoArrayOperation([-4, 5, 57, 33, -90, 34, 17, 18, 19, 20],[4, 2, 54, 24])) // [0,  3, 111, 9, -56, -17]