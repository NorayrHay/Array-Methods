'use strict'

const fakeSplice = function (arr, start, count, str) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(!(i >= start && (i < start + count)) && str === undefined)   newArr.push(arr[i]);
        if(!(i >= start && (i < start + count - 1)) && str !== undefined) {
            if(i === start + count - 1)    arr[i] = str;
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(fakeSplice([1, 4, 5, 6, 7, 8], 3, 2, 'string'));