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
  }

  prepend(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  print() {
    if (this.head === null) {
      console.log("The list is empty!");
    } else {
      console.log(this.head);
      let temp = this.head;
      while (temp) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
  }
  reverse() {
    if (this.head === null) {
      console.log("The list is empty!");
    } else {
      let temp = this.tail;
      while (temp) {
        console.log(temp.data);
        temp = temp.prev;
      }
    }
  }
}

let list1 = new DoublyLinkedList();
list1.prepend(10);
list1.prepend(20);
list1.prepend(30);
list1.print();
console.log("reversed:");
list1.reverse();
