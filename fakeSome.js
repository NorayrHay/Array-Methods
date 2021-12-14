'use strict'

const array = [1, 2, 3, 4, 5];

function fakeSome (arr, cb) {

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr))   return true;
  }
  return false;
}
console.log(fakeSome(array, (element, index) => element % 2 === 0 && index === 3));