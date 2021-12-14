'use strict'

const array = [3, 6, 11, 8, 18];

function fakeFind (arr, cb) {

    for(let i = 0; i < arr.length; i++) {
      if(cb(arr[i], i, arr))      return true;
    }
}
console.log(fakeFind(array, (element, index) => element >= 9 && element <= 17 && index >= 2));