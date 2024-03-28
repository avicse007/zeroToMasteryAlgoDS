const mergeArray = (arr1, arr2) => {
  let resArr = [];
  let len1 = arr1.length;
  let len2 = arr2.length;
  if (len1 < 1) return arr2;
  if (len2 < 1) return arr1;
  let i = 0;
  let j = 0;
  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      resArr.push(arr1[i]);
      i++;
    } else {
      resArr.push(arr2[j]);
      j++;
    }
  }
  if (i < len1 - 1) {
    let restArr1 = arr1.splice(i);
    resArr = [resArr, ...restArr1];
  }
  if (j < len2 - 1) {
    let restArr2 = arr2.splice(j);
    resArr = [resArr, ...restArr2];
  }
  return resArr;
};

let arr1 = [2, 23, 49, 78];
let arr2 = [1, 3, 12, 14, 17, 18, 19];
console.log(`The merge of ${arr1} and ${arr2} is \n ${mergeArray(arr1, arr2)}`);

let arr3 = [0, 3, 4];
let arr4 = [4, 6, 30];
console.log(`The merge of ${arr3} and ${arr4} is \n ${mergeArray(arr3, arr4)}`);
