class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }

  isEmpty() {
    return this.top === -1;
  }

  print() {
    let output = "";
    if (!this.isEmpty()) {
      for (let i = 0; i <= this.top; i++) {
        output += this.stack[i] + "  ";
      }
      return output + "<- top";
    }
    return "The stack is empty!";
  }

  push(val) {
    this.stack[++this.top] = val;
  }

  pop() {
    if (this.isEmpty()) {
      return "The stack is underflow!";
    }
    const removedElement = this.stack[this.top];
    this.top--;
    return removedElement;
  }

  peek() {
    if (this.isEmpty()) {
      return "The stack is empty!";
    }
    return this.stack[this.top];
  }
}

let stack1 = new Stack();
console.log(stack1.isEmpty());
console.log(stack1.print());
stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.pop();
console.log(stack1.isEmpty());
console.log(stack1.print());
console.log(stack1.peek());
