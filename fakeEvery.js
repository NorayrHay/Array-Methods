'use strict'

const array = [1, 2, 4, 5, 6];

function fakeEvery (arr, cb) {

    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i], i, arr))   return true;
    }
    return false;
}
console.log(fakeEvery(array, (element, index) => element % 2 === 1 && index >= 3));