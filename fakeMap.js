'use strict'

const array = [5, 1, 4, 5, 6, 1, 8];

const fakeMap = function (arr, cb) {
    const newArr = [];

    for(let i = 0; i < array.length; i++) {
        if(cb(arr[i], i, arr))   newArr.push(Math.pow(array[i], 2));
    }
    return newArr;
}
console.log(fakeMap(array, (crValue, index) => !!crValue && index % 2 === 0));