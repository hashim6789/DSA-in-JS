class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (node.data > newNode.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal(node) {
    if (node === null) {
      return;
    }
    this.inOrderTraversal(node.left);
    console.log(node.data);
    this.inOrderTraversal(node.right);
  }

  preOrderTraversal(node) {
    if (node === null) {
      return;
    }
    console.log(node.data);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }

  postOrderTraversal(node) {
    if (node === null) {
      return;
    }
    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);
    console.log(node.data);
  }

  search(node, key) {
    if (node === null) {
      return null;
    }

    if (key < node.data) {
      return this.search(node.left, key);
    } else if (key > node.data) {
      return this.search(node.right, key);
    } else {
      return node;
    }
  }
}

const tree1 = new Tree();
console.log(tree1.getRoot());
tree1.insert(30);
tree1.insert(40);
tree1.insert(20);
tree1.insert(10);
tree1.insert(50);
tree1.inOrderTraversal(tree1.getRoot());
console.log(tree1.getRoot());
console.log(tree1.search(tree1.getRoot(), 30));
