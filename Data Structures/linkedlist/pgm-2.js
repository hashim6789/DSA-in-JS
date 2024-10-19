class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.head === null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("the list is empty!");
    } else {
      let output = "";
      let temp = this.head;
      while (temp) {
        output += `${temp.val} -> `;
        temp = temp.next;
      }
      output += "null";
      console.log(output);
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    console.log(`The node ${this.head.val} is prepended`);
    this.size++;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  removeFirst() {
    if (this.isEmpty()) {
      console.log("The list is empty!");
      return;
    } else if (this.getSize() === 1) {
      console.log(`The node ${this.head.val} if removed.`);
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
  }

  removeLast() {
    if (this.isEmpty()) {
      console.log("The list is empty!");
      return;
    } else if (this.getSize() === 1) {
      console.log(`The node ${this.head.val} if removed.`);
      this.head = null;
      this.tail = null;
    } else {
      const temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = null;
    }
    this.size--;
  }

  insertPos(pos, val) {
    let newNode = new Node(val);
    if (0 > pos || this.getSize() < pos) {
      console.log("Invalid position!");
      return;
    } else if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else if (pos === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (pos === this.getSize()) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      for (let i = 0; i < pos - 1; i++) {
        temp = temp.next;
      }
      newNode.next = temp.next;
      temp.next = newNode;
    }
    this.size++;
  }
}

let list2 = new LinkedList();
console.log(list2.getSize());
console.log(list2.isEmpty());
list2.prepend(1);
list2.append(5);
list2.print();
list2.insertPos(1, 70);
list2.insertPos(20, 80);
list2.insertPos(2, 90);
list2.print();
