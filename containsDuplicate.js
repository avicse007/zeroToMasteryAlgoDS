const containsDuplicate = function (nums) {
  let mySet = new Set();
  let res = false;
  nums.forEach((ele) => {
    console.log(`Set is`, mySet);
    if (mySet.has(ele)) {
      res=true;
    } else {
      mySet.add(ele);
    }
  });
  return res;
};
console.log(containsDuplicate([1, 2, 3, 1])); //
