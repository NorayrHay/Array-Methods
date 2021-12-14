'use strict'

const array = [5, 1, 4, 5, 6, 1, 8];

function fakeFindIndex (arr, cb) {

  for(let i = 0; i < arr.length; i++) {
     if(cb(arr[i], i, arr))    return i;
  }
  return -1;
}
console.log(fakeFindIndex(array, (element, index) => element >= 5 && index >= 2));