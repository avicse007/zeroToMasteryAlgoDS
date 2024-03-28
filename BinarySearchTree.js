//@ts-ignore
class BinaryNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new BinaryNode(val);
    if (this.root == null) {
      this.root = node;
      return this;
    }
    let curr = this.root;
    while (true) {
      if (node.val < curr.val) {
        if (curr.left == null) {
          curr.left = node;
          return this;
        }
        curr = curr.left;
      } else {
        if (curr.right == null) {
          curr.right = node;
          return this;
        }
        curr = curr.right;
      }
    }
  }
  lookup(val) {
    if (this.root == null) return { found: false, node: null, parent: null };
    if (this.root.val == val)
      return { found: true, node: this.root, parent: null };
    let curr = this.root;
    let parentNode = null;
    while (curr) {
      if (curr.val > val) {
        parentNode = curr;
        curr = curr.left;
      } else if (curr.val < val) {
        parentNode = curr;
        curr = curr.right;
      } else if (curr.val == val) {
        return { found: true, node: curr, parent: parentNode };
      }
    }
    return { found: false, node: null, parent: null };
  }

  remove(val) {
    let curr = this.root;
    let found = false;
    const result = this.lookup(val);
    curr = result.node;
    let parentNode = result.parent;
    if (curr.left == null && curr.right == null) {
      if (parentNode.left == curr) parentNode.left = null;
      else if (parentNode.right == curr) parentNode.right = null;

      return this;
    } else if (curr.right != null) {
      let temp = curr.right;
      parentNode = curr;
      while (temp.left != null) {
        parentNode = temp;
        temp = temp.left;
      }
      curr.val = temp.val;
      if (parentNode.left == temp) parentNode.left = null;
      else if (parentNode.right == temp) parentNode.right = null;
      return this;
    } else if (curr.left != null) {
      curr.val = curr.left.val;
      curr.left = null;
      return this;
    }
  }
}
function preOrderTraversal(node) {
  if (node == null) return;
  console.log("Data :", node.val);
  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
}

function postOrderTraversal(node) {
  if (node == null) return;
  postOrderTraversal(node.left);
  postOrderTraversal(node.right);
  console.log("Data :", node.val);
}

function inOrderTraversal(node) {
  if (node == null) return;
  inOrderTraversal(node.left);
  console.log("Data :", node.val);
  inOrderTraversal(node.right);
}

const tree = new BinarySearchTree();
[9, 4, 6, 20, 170, 15, 1].forEach((ele) => tree.insert(ele));
console.log(`=========PreOrderTraversal=========`);
preOrderTraversal(tree.root);
//console.log(`=========PostOrderTraversal=========`);
//postOrderTraversal(tree.root);
//console.log(`=========InOrderTraversal=========`);
//inOrderTraversal(tree.root);
console.log(JSON.stringify(tree));
//console.log(`=========Lookup=========`);
//[9, 4, 6, 20, 170, 15, 1].forEach((ele) =>
//  console.log(ele, ":", tree.lookup(ele))
//);
//console.log(`=========Lookup Falsy =========`);
//[-1, 0, 99, 101, 123, 45].forEach((ele) =>
//  console.log(ele, ":", tree.lookup(ele))
//);

console.log(`======Remove==========`);
//tree.remove(9);
//tree.remove(4);
tree.remove(20);
//tree.remove(1);
//tree.remove(170);
console.log(JSON.stringify(tree));
preOrderTraversal(tree.root);

/*

                9
             4       20
           1   6   15     170

*/
