class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      console.log("The list is empty!");
    } else {
      let output = "null <=> ";
      let temp = this.head;
      while (temp) {
        output += `${temp.data} <=> `;
        temp = temp.next;
      }
      console.log(`${output}null`);
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  removeFirst() {
    if (this.isEmpty()) {
      console.log("The list is empty!");
      return;
    } else if (this.getSize() === 1) {
      console.log(`The ${this.head.data} is removed.`);
      this.head = null;
      this.tail = null;
    } else {
      console.log(`The ${this.head.data} is removed.`);
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
  }

  removeLast() {
    if (this.isEmpty()) {
      console.log("The list is empty!");
      return;
    } else if (this.getSize === 1) {
      console.log(`The ${this.head.data} is removed.`);
      this.head = null;
      this.tail = null;
    } else {
      console.log(`The ${this.head.data} is removed.`);
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
  }

  reverse() {
    let curr = this.head;
    let temp = null;
    console.log(curr.data);
    while (curr) {
      temp = curr.next;
      curr.next = curr.prev;
      curr.prev = temp;
      curr = temp;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  insertBefore(target, data) {
    if (this.isEmpty()) {
      console.log("The list is empty!");
      return;
    } else {
      const newNode = new Node(data);
      let temp = this.head;
      while (temp) {
        if (temp.data === target) {
          newNode.next = temp;
          newNode.prev = temp.prev;
          if (temp.prev) {
            temp.prev.next = newNode;
          } else {
            this.head = newNode;
          }
          temp.prev = newNode;
          this.size++;
          return;
        }
        temp = temp.next;
      }
    }
  }
  insertAfter(target, data) {
    if (this.isEmpty()) {
      console.log("The list is empty!");
    } else {
      const newNode = new Node(data);
      let temp = this.head;
      while (temp) {
        if (temp.data === target) {
          newNode.prev = temp;
          newNode.next = temp.next;
          if (temp.next) {
            temp.next.prev = newNode;
          }
          temp.next = newNode;
          return;
        }
        temp = temp.next;
      }
    }
  }
}

let list3 = new DoublyLinkedList();
list3.prepend(40);
list3.append(20);
list3.prepend(10);
list3.append(30);
list3.print();
// list3.removeFirst();
// list3.removeLast();
// list3.reverse();
list3.insertBefore(30, 50);
list3.insertAfter(30, 50);
list3.print();
console.log("size = ", list3.getSize());
