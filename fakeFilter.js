'use strict'

const array = [5, 1, 4, 5, 6, 1, 8];

const fakeFilter = function (arr, cb) {
    const newArr = [];

    for(let i = 0; i < array.length; i++) {
        if(cb(arr[i], i, arr))   newArr.push(array[i]);
    }
    return newArr;
}
console.log(fakeFilter(array, (element, index) => element % 2 === 0 && index % 2 === 0));