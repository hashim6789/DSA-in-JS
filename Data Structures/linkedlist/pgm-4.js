class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      console.log("The list is empty!");
    } else {
      let temp = this.head;
      let output = "head -> ";
      do {
        output += `${temp.data} -> `;
        temp = temp.next;
      } while (temp !== this.head);
      console.log(output, "head");
    }
  }

  append(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
    this.size++;
  }
  arrayToList(arr) {
    for (let i = 0; i < arr.length; i++) {
      const newNode = new Node(arr[i]);
      if (this.isEmpty()) {
        this.tail = newNode;
        this.head = newNode;
        this.tail.next = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
        this.tail.next = this.head;
      }
      this.size++;
    }
  }
}

let list4 = new CircularLinkedList();

list4.print();
console.log(list4.getSize());
console.log(list4.isEmpty());
list4.arrayToList([1, 2, 3, 4, 5]);
// list4.append(10);
// list4.append(20);
// list4.append(30);

list4.print();
