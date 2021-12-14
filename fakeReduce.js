'use strict'

const array = [5, 1, 4, 5, 6, 1, 8];

const fakeReduce = function (arr, cb, accumulator) {
    let sum = 0;
    accumulator = 0;

    for(let i = 0; i < array.length; i++) {
        if(cb(arr[i], i, arr, accumulator))  {
          sum += arr[i];
          accumulator += sum;
        }
    }
    return accumulator;
}
console.log(fakeReduce(array, (crValue, index, acc) => !!crValue && index % 2 === 1 && !!acc));