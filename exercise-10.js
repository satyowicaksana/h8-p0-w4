function changeMe(arr) {
    var obj = {
        firstName: '',
        lastName: '',
        gender: '',
        age: 0
    }
    if(arr.length === 0) {
        console.log('""');
    }
    for(var i = 0; i < arr.length; i++) {
        console.log(i + 1 + '. ' + arr[i][0] + ' ' + arr[i][1] + ':');
        obj.firstName = arr[i][0];
        obj.lastName = arr[i][1];
        obj.gender = arr[i][2];
        var today = new Date();
        if(arr[i][3] === undefined || arr[i][3] > today.getFullYear()) {
            obj.age = 'Invalid birth year';
        } else {
            obj.age = today.getFullYear() - arr[i][3];
        }
        console.log(obj);
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""