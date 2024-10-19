class Queue {
  constructor() {
    this.queue = [];
    this.front = -1;
    this.rear = -1;
  }

  isEmpty() {
    return this.front === -1;
  }

  getSize() {
    if (this.isEmpty()) {
      return 0;
    }
    return this.rear - this.front + 1;
  }

  print() {
    if (this.isEmpty()) {
      console.log("The queue is empty!");
    } else {
      let output = "front -> ";
      for (let i = this.front; i <= this.rear; i++) {
        output += `${this.queue[i]} `;
      }
      output += "<- rear";
      console.log(output);
    }
  }

  enqueue(val) {
    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear++;
    }
    this.queue[this.rear] = val;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("The queue is empty!");
    } else if (this.getSize() === 1) {
      this.front = -1;
      this.rearz = -1;
    } else {
      for (let i = this.front; i < this.rear; i++) {
        this.queue[i] = this.queue[i + 1];
      }
      this.rear--;
    }
  }
  peek() {
    if (this.isEmpty()) {
      return "The queue is empty!";
    }
    return this.queue[this.front];
  }
}

let queue1 = new Queue();
console.log(queue1.isEmpty());
console.log(queue1.getSize());
queue1.print();
queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);
queue1.enqueue(40);
queue1.enqueue(50);
console.log(queue1.peek());
console.log(queue1.isEmpty());
console.log(queue1.getSize());
queue1.print();
queue1.dequeue();
queue1.dequeue();
queue1.dequeue();
queue1.dequeue();
queue1.dequeue();
console.log(queue1.peek());
console.log(queue1.getSize());
queue1.print();
