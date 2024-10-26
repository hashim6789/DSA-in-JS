class Node {
  constructor() {
    this.children = {};
    this.isEnded = false;
  }
}

class Trie {
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

  startWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }

  remove(string) {
    const removeHelper = (node, word, depth = 0) => {
      if (node === null) return false;
      if (depth === word.length) {
        if (node.isEnded) {
          node.isEnded = false;
        }
        return Object.keys(node.children).length === 0;
      }

      let char = word[depth];
      let result = removeHelper(node.children[char], word, depth + 1);
      console.log(result);
      if (result) {
        delete node.children[char];
        return !node.isEnded && Object.keys(node.children).length === 0;
      }
      return false;
    };

    removeHelper(this.root, string);
  }
}

const trie1 = new Trie();
trie1.insert("Hashimhashi");
trie1.insert("Hashi");
trie1.remove("Hashimhashi");
console.log(trie1.root.children.H.children.a.children.s.children.h);
console.log(trie1.search("Hashi"));
console.log(trie1.startWith("Has"));
