class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNode(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertHelper(this.root, newNode);
    }
  }

  insertHelper(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertHelper(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertHelper(node.right, newNode);
      }
    }
  }

  isBST(node, min = -Infinity, max = Infinity) {
    if (node === null) return true;

    if (node.data <= min || node.data >= max) return false;

    return (
      this.isBST(node.left, min, node.data) &&
      this.isBST(node.right, node.data, max)
    );
  }

  search(node, key) {
    if (node === null) {
      return null;
    }

    if (node.data > key) {
      return this.search(node.left, key);
    } else if (node.data < key) {
      return this.search(node.right, key);
    } else {
      return node;
    }
  }

  inOrder(node) {
    if (node === null) return;
    this.inOrder(node.left);
    console.log(node.data);
    this.inOrder(node.right);
  }

  preOrder(node) {
    if (node === null) return;
    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  postOrder(node) {
    if (node === null) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.data);
  }

  remove(key) {
    this.removeHelper(this.root, key);
  }

  removeHelper(node, key) {
    if (node === null) {
      return null;
    }

    if (node.data > key) {
      node.left = this.removeHelper(node.left, key);
      return node;
    } else if (node.data < key) {
      node.right = this.removeHelper(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
    }

    const aux = this.findMinNode(node.right);
    node.data = aux.data;

    node.right = this.removeHelper(node.right, aux.data);
    return node;
  }

  findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  sumOfNodes(node) {
    if (node === null) {
      return 0;
    }
    return node.data + this.sumOfNodes(node.left) + this.sumOfNodes(node.right);
  }

  findClosest(target) {
    let node = this.root;
    let closest = this.root.data; //50
    let closestVal = Math.abs(target - closest); //30

    while (node) {
      if (closestVal > Math.abs(node.data - target)) {
        closest = node.data;
        closestVal = Math.abs(node.data - target);
      }

      if (target < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return closest;
  }

  findMin(node) {
    if (node.left === null) {
      return node.data;
    }
    return this.findMin(node.left);
  }
  findMax(node) {
    if (node.right === null) {
      return node.data;
    }
    return this.findMax(node.right);
  }

  findHeight(node) {
    if (node === null) {
      return -1;
    }

    const left = this.findHeight(node.left);
    const right = this.findHeight(node.right);
    return Math.max(left, right) + 1;
  }

  findDepth(node, target, depth = 0) {
    if (node === null) {
      return -1;
    }

    if (node.data === target) {
      return depth;
    }

    if (node.data > target) {
      return this.findDepth(node.left, target, depth + 1);
    } else {
      return this.findDepth(node.right, target, depth + 1);
    }
  }

  // isBST(node, min = null, max = null) {
  //   if (node === null) return true;

  //   if (
  //     (min !== null && node.data <= min) ||
  //     (max !== null && node.data >= max)
  //   ) {
  //     return false;
  //   }

  //   return (
  //     this.isBST(node.left, min, node.data) &&
  //     this.isBST(node.right, node.data, max)
  //   );
  // }
}

const bst1 = new BinarySearchTree();
bst1.insertNode(50);
bst1.insertNode(80);
bst1.insertNode(10);
bst1.insertNode(20);
bst1.insertNode(5);
bst1.insertNode(70);
bst1.insertNode(90);
bst1.insertNode(85);
bst1.insertNode(83);
bst1.insertNode(100);
bst1.insertNode(81);
// bst1.remove(70);
// bst1.remove(80);
// bst1.remove(8);

console.log(bst1.search(bst1.root, 50));

// bst1.inOrder(bst1.root);
// 5 10 20 50 70 80 90

// bst1.preOrder(bst1.root);
// 50 10 5 20 80 70 90

// bst1.postOrder(bst1.root);
// 5 20 10 70 90 80 50

console.log("sum of nodes = ", bst1.sumOfNodes(bst1.root.left));

// console.log(bst1.findClosest(86));
// console.log(bst1.findMin(bst1.root));
// console.log(bst1.findMax(bst1.root));
console.log(bst1.findHeight(bst1.root));

bst1.root.left = new Node(100);
console.log(bst1.isBST(bst1.root));
