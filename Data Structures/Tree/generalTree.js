class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

class GeneralTree {
  constructor() {
    this.root = null;
  }

  insert(parentData, data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.#insertNode(this.root, parentData, newNode);
    }
  }

  #insertNode(node, parentData, newNode) {
    if (node.data === parentData) {
      node.children.push(newNode);
    } else {
      for (let child of node.children) {
        this.#insertNode(child, parentData, newNode);
      }
    }
  }

  traverseDFS(node) {
    if (node !== null) {
      console.log("DFS", node.data + " ");
      for (let child of node.children) {
        this.traverseDFS(child);
      }
    }
  }

  search(node, key) {
    console.log(node.data);
    if (node === null) {
      return null;
    }
    if (node.data === key) {
      return node;
    }
    for (let child of node.children) {
      let result = this.search(child, key);
      if (result) return result;
    }
    return null;
  }

  delete(parentData, data) {
    if (this.root === null) {
      return null;
    }
    this.deleteHelper(this.root, parentData, data);
  }

  deleteHelper(node, parentData, data) {
    if (node.data === parentData) {
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].data === data) {
          node.children.splice(i, 1);
          return data;
        }
      }
    }
    if (node !== null) {
      for (let child of node.children) {
        console.log(" data =", child.data + " ");
        let result = this.deleteHelper(child, parentData, data);
        if (result) return result;
      }
    }
  }
}

const tree1 = new GeneralTree();
tree1.insert(null, 10);
tree1.insert(10, 20);
tree1.insert(10, 30);
tree1.insert(30, 40);
tree1.insert(20, 50);
tree1.insert(20, 60);
tree1.delete(10, 20);
tree1.traverseDFS(tree1.root);

console.log(tree1.search(tree1.root, 40));
