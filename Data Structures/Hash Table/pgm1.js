class HashTableArray {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  _hash(key) {
    return key % this.size;
  }

  setVal(key, val) {
    const index = this.hash1(key);
    console.log("index :", index);
    if (this.table[index]) {
      console.log("The collision occures");
    } else {
      this.table[index] = val;
    }
  }

  getVal(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      return this.table[index];
    }
    return null;
  }

  deleteVal(key) {
    const index = this.hash1(key);
    if (this.table[index]) {
      const removedElement = this.table[index];
      delete this.table[index];
      return removedElement;
    }
    return null;
  }

  update(key, val) {
    const index = this._hash(key);
    if (this.table[index]) {
      this.table[index] = val;
    }
  }

  hash1(key) {
    let hashVal = 0;
    for (let i = 0; i < key.length; i++) {
      hashVal = (hashVal + key.charCodeAt(i)) % this.size;
    }
    console.log(hashVal);
    return hashVal;
  }
}

const t1 = new HashTableArray(10);
console.log(t1.hash1("hello"));
t1.setVal("hello", "Hashim");
console.log(t1.table);
