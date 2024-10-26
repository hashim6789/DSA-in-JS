// Recursive javascript program to reverse
// a linked list
class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

// Function to reverse the linked list
function reverseList(head) {
  if (head === null || head.next === null) return head;

  // Reverse the rest of the list
  const revHead = reverseList(head.next);
  console.log(revHead);
  // console.log("head = ", head);

  // // Make the current head the last node
  head.next.next = head;

  // console.log("head = ", head);
  console.log();

  // Update the next of current head to null
  head.next = null;

  // Return the new head of the reversed list
  return revHead;
}

function printList(head) {
  let curr = head;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
}

// Create a hard-coded linked list:
// 1 -> 2 -> 3 -> 4 -> 5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

head = reverseList(head);
printList(head);
