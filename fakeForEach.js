'use strict'

const array = [6, 5, 1, 4, 6, 8];

const fakeForEach = function (arr,cb) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i], i, arr))   return undefined;
  }
}
console.log(fakeForEach(array, (crValue, index) => !!crValue && !!index));