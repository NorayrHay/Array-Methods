'use strict'

const fakeSlice = function (arr, begin, end) {
    let newArr = [];
  
    for(let i = 0; i < arr.length; i++) {
      if(i >= begin && i < end)   newArr.push(arr[i]);
      else if(i >= begin && end === undefined)   newArr.push(arr[i]);
      else if(begin === undefined && end > arr.length)  newArr.push();
    }
    return newArr;
  }
  console.log(fakeSlice([1, 4, 5, 6, 7, 8], 2, 5));