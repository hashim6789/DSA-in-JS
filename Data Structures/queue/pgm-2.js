class Queue {
  constructor() {
    this.queue = {};
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  getSize() {
    return this.rear - this.front;
  }

  print() {
    if (this.isEmpty()) {
      console.log("The queue is empty!");
    } else {
      let output = "front -> ";
      for (const key in this.queue) {
        output += `${this.queue[key]} `;
      }
      output += "<- rear";
      console.log(output);
    }
  }

  enqueue(val) {
    this.queue[this.rear] = val;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "The queue is empty!";
    }
    const removedElement = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return removedElement;
  }

  peek() {
    if (this.isEmpty()) {
      return "The queue is empty!";
    }
    return this.queue[this.front];
  }
}

let queue2 = new Queue();
console.log(queue2.isEmpty());
console.log(queue2.getSize());
queue2.print();
queue2.enqueue(10);
queue2.enqueue(20);
queue2.enqueue(30);
queue2.enqueue(40);
queue2.enqueue(50);
console.log(queue2.peek());
console.log(queue2.isEmpty());
console.log(queue2.getSize());
queue2.print();
queue2.dequeue();
queue2.dequeue();
queue2.dequeue();
queue2.dequeue();
queue2.dequeue();
console.log(queue2.peek());
console.log(queue2.getSize());
queue2.print();
