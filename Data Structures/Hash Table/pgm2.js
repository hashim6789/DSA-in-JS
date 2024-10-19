class HashMapArray {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  _hash(key) {
    let hashVal = 0;
    const p = 31;
    for (let i = 0; i < key.length; i++) {
      hashVal = (hashVal * p + key.charCodeAt(i)) % this.size;
    }
    return hashVal;
  }

  setVal(key, val) {
    const index = this._hash(key);
    if (!this.map[index]) {
      this.map[index] = [];
    }
    this.map[index].push([key, val]);
  }

  getVal(key) {
    const index = this._hash(key);
    if (this.map[index]) {
      for (let i = 0; i < this.map[index].length; i++) {
        if (this.map[index][i][0] === key) {
          return this.map[index][i][1];
        }
      }
    }
    return undefined;
  }

  deleteVal(key) {
    const index = this._hash(key);
    if (this.map[index].length > 0) {
      for (let i = 0; i < this.map[index].length; i++) {
        if (this.map[index][i][0] === key) {
          const removedElement = this.map[index][i][1];
          this.map[index].splice(i, 1);
          return removedElement;
        }
      }
    }
    return undefined;
  }
}

const map1 = new HashMapArray(10);
console.log(map1._hash("a"));
map1.setVal("a", 1234);
console.log(map1.getVal("b"));
console.log(map1.deleteVal("a"));
