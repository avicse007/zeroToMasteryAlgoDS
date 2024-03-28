const reverse = (arr, startIndex, endIndex) => {
  let i = startIndex;
  //   console.log(
  //     `Revered array of ${arr} with startIndex:${startIndex} and endIndex:${endIndex} is`
  //   );
  let j = endIndex;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  //console.log(`${arr}`);
  return arr;
};

const rotatedArray = (arr, k) => {
  //console.log(`The input array is ${arr}`);
  let kk = k % arr.length; // because k can ge greater than length of array
  let startIndex = 0;
  let endIndex = arr.length - 1;
  reverse(arr, startIndex, endIndex);
  reverse(arr, startIndex, kk - 1);
  reverse(arr, kk, endIndex);
  console.log(`The ${k} rotated array is ${arr}`);
  return arr;
};

//rotatedArray([1, 2, 3, 4, 5], 2);
rotatedArray([1, 2, 3, 4, 5, 6, 7], 3); //[5,6,7,1,2,3,4]
//rotatedArray([-1, -100, 3, 99], 2); //[3,99,-1,-100]
