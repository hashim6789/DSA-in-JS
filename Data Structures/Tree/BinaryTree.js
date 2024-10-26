class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    const insertHelper = (node) => {
      if (node.data > val) {
        if (!node.left) {
          node.left = newNode;
        } else {
          insertHelper(node.left);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          insertHelper(node.right);
        }
      }
    };

    insertHelper(this.root);
  }

  //   delete(val){
  //     if(this.root === null){
  //         return null;
  //     }

  //     // const deleteHelper = (node) => {
  //     //     if()
  //     // }

  // }
  inOrderTraversal() {
    const inOrder = (node) => {
      if (node === null) return;
      inOrder(node.left);
      console.log(node.data);
      inOrder(node.right);
    };
    inOrder(this.root);
  }
  preOrderTraversal() {
    const preOrder = (node) => {
      if (node === null) return;
      console.log(node.data);
      preOrder(node.left);
      preOrder(node.right);
    };
    preOrder(this.root);
  }
  postOrderTraversal() {
    const postOrder = (node) => {
      if (node === null) return;
      postOrder(node.left);
      postOrder(node.right);
      console.log(node.data);
    };
    postOrder(this.root);
  }

  delete(val) {
    // if (this.root === null) {
    //   return null;
    // }
    const deleteHelper = (node, val) => {
      if (node === null) {
        return null;
      }

      if (node.data > val) {
        node.left = deleteHelper(node.left, val);
        return node;
      } else if (node.data < val) {
        node.right = deleteHelper(node.right, val);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        } else if (!node.left) {
          node = node.right;
          return node;
        }

        const aux = minNode(node.right);
        node.data = aux.data;
        node.right = deleteHelper(node.right, aux.data);
        return node;
      }
    };

    const minNode = (node) => {
      if (node.left === null) return node;
      return minNode(node.left);
    };
    deleteHelper(this.root, val);
  }

  findHeight(node) {
    if (node === null) {
      return -1;
    }

    const leftHeight = this.findHeight(node.left);
    const rightHeight = this.findHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  findDepth(node, val, depth = 0) {
    if (node === null) return -1;
    if (node.data === val) return depth;
    if (node.data > val) return this.findDepth(node.left, val, depth + 1);
    else return this.findDepth(node.right, val, depth + 1);
  }

  isBST(node) {
    if (this.root === null) {
      return true;
    }

    const isBSTHelper = (node, min = -Infinity, max = Infinity) => {
      if (node === null) {
        return true;
      }

      if (node.data <= min || node.data >= max) {
        return false;
      }

      return (
        isBSTHelper(node.left, min, node.data) &&
        isBSTHelper(node.right, node.data, max)
      );
    };
    return isBSTHelper(node);
  }

  findClosestNode(val) {
    let node = this.root;
    let closestNodeValue = node.data;
    let closerValue = Math.abs(val - closestNodeValue);

    while (node) {
      console.log("testing =", closerValue);
      if (closerValue > Math.abs(val - node.data)) {
        closestNodeValue = node.data;
        closerValue = Math.abs(val - node.data);
      }

      if (node.data > val) {
        node = node.left;
      } else if (node.data < val) {
        node = node.right;
      } else {
        return node.data;
      }
    }
    return closestNodeValue;
  }
}

const btree1 = new BinaryTree();
btree1.insert(50);
btree1.insert(30);
btree1.insert(25);
btree1.insert(70);
btree1.insert(40);
btree1.insert(20);
btree1.insert(10);

console.log(btree1.root);
// btree1.root.left.data = 100;
console.log(btree1.root);
console.log(btree1.isBST(btree1.root));
console.log(btree1.findClosestNode(29));

// btree1.inOrderTraversal(btree1.root);
// btree1.preOrderTraversal(btree1.root);
// btree1.postOrderTraversal(btree1.root);
// // btree1.delete(30);
// console.log(btree1.root);

// console.log(btree1.findHeight(btree1.root));
// console.log(btree1.findDepth(btree1.root, 100));
