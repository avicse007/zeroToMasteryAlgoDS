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
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
//head.next.next.next.next = new ListNode(5);
//head.next.next.next.next.next = new ListNode(6);
console.log(head.toString());

function reverseKGroupList(head, k) {
  //1. Base case return if head is null
  if (head == null) return head;
  //2. reverse the k group
  let curr = head;
  let [next, prev] = [null, null];
  let count = 0;
  while (curr != null && count < k) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    count++;
  }
  //3. recursively call for rest if its multiple of k
  let temp = next;
  let KMultiple = 0;
  let isKMultiple = false;
  while (temp != null) {
    console.log("temp", temp.val, KMultiple);
    if (KMultiple >= k - 1) {
      isKMultiple = true;
      break;
    }
    temp = temp.next;
    KMultiple++;
  }
  if (isKMultiple && next != null) {
    console.log("isKMultiple", isKMultiple);
    head.next = reverseKGroupList(next, k);
  } else {
    head.next = curr;
  }
  //4. return the head
  return prev;
}

//console.log("After reversal with k=2 ", reverseKGroupList(head, 2).toString());
//console.log("After reversal with k=3 ", reverseKGroupList(head, 3).toString());
console.log("After reversal with k=2 ", reverseKGroupList(head, 2).toString());
