class Node {
  constructor() {
    this.children = {};
    this.isEnded = false;
  }
}

class TrieNode {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let node = this.root;
    for (let char of string) {
      if (!node.children[char]) {
        node.children[char] = new Node();
      }
      node = node.children[char];
    }
    node.isEnded = true;
  }

  remove(string) {
    const removeHelper = (node, word, depth = 0) => {
      if (node === null) return false;
      if (word.length === depth) {
        if (node.isEnded) {
          node.isEnded = false;
        }
        return Object.keys(node.children).length === 0;
      }

      let char = word[depth];
      if (removeHelper(node.children[char], word, depth + 1)) {
        delete node.children[char];
        return !node.isEnded && Object.keys(node.children).length === 0;
      }
      return false;
    };

    removeHelper(this.root, string);
  }

  search(string) {
    let node = this.root;
    for (let char of string) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEnded;
  }
}

const trie2 = new TrieNode();
trie2.insert("hello");
// trie2.remove("hello");
console.log(trie2.search("hell"));
console.log(trie2.root);
// console.log(trie2.root.children.h.children.e.children.l.children.l);
