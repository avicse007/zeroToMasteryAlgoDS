const reverseString = (str) => {
  if (!str || str.length < 2 || typeof str !== "string") return str;
  let res;
  let arr = str.split("");
  const size = arr.length;
  let acc = [];
  let reversedArr = arr.reduce((acc, val, index) => {
    // console.log(`val is ${val} index is ${index}`);
    // console.log(`Diff is ${size - index - 1}`);
    // console.log(`acc is ${acc}`);
    acc.push(arr[size - index - 1]);
    return acc;
  }, []);

  res = reversedArr.join("");
  return res;
};

const str = "Hello World !!!";
console.log(`The reversed string of ${str} is ${reverseString(str)}`);
