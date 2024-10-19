// class Node {
//   constructor(value) {
//     this.val = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   isEmpty() {
//     // return this.head === null;
//     return this.size === 0;
//   }

//   getSize() {
//     return this.size;
//   }

//   print() {
//     let output = "";
//     if (this.isEmpty()) {
//       output = "The list is empty now!";
//     } else {
//       let iterator = this.head;
//       while (iterator) {
//         output += `${iterator.val} -> `;
//         iterator = iterator.next;
//       }
//       output += "null";
//     }
//     return output;
//   }

//   prepend(value) {
//     const newNode = new Node(value);
//     if (this.isEmpty()) {
//       this.head = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.size++;
//   }

//   append(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//     } else {
//       let prev = this.head;
//       while (prev.next) {
//         prev = prev.next;
//       }
//       //   newNode.next = null
//       prev.next = newNode;
//     }
//     this.size++;
//   }

//   insert(value, index) {
//     if (index > this.getSize() || index < 0) {
//       return;
//     } else if (index === 0) {
//       this.prepend(value);
//     } else if (index === this.getSize()) {
//       this.append(value);
//     } else {
//       const newNode = new Node(value);
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       newNode.next = prev.next;
//       prev.next = newNode;
//       this.size++;
//     }
//   }

//   removeFrom(index) {
//     if (index > this.getSize() || index < 0) {
//       console.log("The invalid index!");
//       return;
//     } else if (index === 0) {
//       let removedNode = this.head;
//       this.head = removedNode.next;
//       console.log(`The ${removedNode.val} is removed.`);
//     } else if (index === this.getSize()) {
//       let prev = this.head;
//       while (prev.next.next) {
//         prev = prev.next;
//       }
//       const removedNode = prev.next;
//       prev.next = null;
//       console.log(`The ${removedNode.val} is removed.`);
//     } else {
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       const removedNode = prev.next;
//       console.log(`The ${removedNode.val} is removed.`);
//       prev.next = removedNode.next;
//     }
//     this.size--;
//   }

//   removeValue(value) {
//     if (this.isEmpty()) {
//       console.log("The list is empty!");
//     } else {
//       if (this.head.val === value) {
//         const removedNode = this.head;
//         this.head = this.head.next;
//         console.log(`The ${removedNode.val} is removed.`);
//         this.size--;
//         return;
//       } else {
//         let prev = this.head;
//         while (prev.next && prev.next.val !== value) {
//           prev = prev.next;
//         }
//         if (prev.next) {
//           const removedNode = prev.next;
//           prev.next = removedNode.next;
//           console.log(`The ${removedNode.val} is removed.`);
//           this.size--;
//           return;
//         }
//         console.log("The value is not found!");
//       }
//     }
//   }

//   search(value) {
//     if (this.isEmpty()) {
//       return -1;
//     } else {
//       let currNode = this.head;
//       let i = 0;
//       while (currNode) {
//         if (currNode.val === value) {
//           return i;
//         }
//         currNode = currNode.next;
//         i++;
//       }
//       return -1;
//     }
//   }

//   reverse() {
//     let prev = null;
//     let curr = this.head;
//     while (curr) {
//       const next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//     this.head = prev;
//   }
// }

// let list1 = new LinkedList();
// list1.append(2);
// list1.append(3);
// list1.append(4);
// list1.append(5);
// list1.insert(10, 3);
// list1.removeValue(2);
// console.log(list1.search(3));
// list1.reverse();
// console.log(list1.print());
