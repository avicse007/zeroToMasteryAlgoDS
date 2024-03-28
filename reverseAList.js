// @ts-nocheck
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  this.toString = function toString() {
    let curr = this;
    let res = "";
    while (curr !== null) {
      res = res + curr.val + "==>";
      curr = curr.next;
    }
    return res;
  };
  this.reverse = function () {
    let prev = null;
    let curr = this;
    while (curr) {
      let tempCurrNext = curr.next; //2
      curr.next = prev; //1->null
      prev = curr; //1->null
      curr = tempCurrNext;
    }

    //head.next = currNext;
    return prev;
  };
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
console.log(head.toString());
console.log(head.reverse().toString());

//ES6 Way
var reverseList = function (head) {
  let [prev, current] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};
