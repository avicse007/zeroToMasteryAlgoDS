// @ts-nocheck
const maxSubArray = (arr) => {
  let maxSum = arr[0];
  let sum = 0;
  if (arr.length < 2) {
    return arr[0];
  }
  arr.forEach((element) => {
    sum = sum + element;
    maxSum = Math.max(maxSum, sum);
    if (sum < 0) sum = 0;
  });
  return maxSum;
};
const arr = [5, 4, -1, 7, 8]; //[-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(`The MaxSum subarray for array ${arr} is ${maxSubArray(arr)}`);
