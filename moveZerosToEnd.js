// @ts-nocheck
const moveZerosToEnd = (arr) => {
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) zeroCount++;
    else if (zeroCount > 0) {
      let t = arr[i];
      arr[i] = 0;
      arr[i - zeroCount] = t;
    }
  }
  return arr;
};

const arr = [0, 1, 0, 3, 12];
console.log(
  `moving all zeros at end of ${arr} becomes ${moveZerosToEnd(arr)} `
);
