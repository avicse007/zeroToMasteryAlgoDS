let arr = [1, 2, 3];

arr.push(10); // adding element at the end of the array
console.log(`Array after push is ${arr}`);
let popElement = arr.pop(); // removing the last element of the array.
console.log(`pop Element is ${popElement}`);
console.log(`Array is ${arr}`);
arr.unshift(100); // adding element in at the start of the array
console.log(`Array is ${arr}`);
const shiftedElement = arr.shift(); // removing element from the array;
console.log(`The shifted element is ${shiftedElement}`);
console.log(`Array after shift is ${arr}`);
const joinedString = arr.join("<->");
console.log(`Joined String from the array is ${joinedString}`);
console.log(`Array after join is ${arr}`);
const slicedArray = arr.slice(-1, 1);
console.log(`The new Sliced array is ${slicedArray}`);
console.log(`Array after the slice operation is ${arr}`);
