class minHeap {
  constructor() {
    this.heap = [];
  }

  _parent(i) {
    return Math.floor((i - 1) / 2);
  }

  _leftChild(i) {
    return 2 * i + 1;
  }
  _rightChild(i) {
    return 2 * i + 2;
  }

  _heapUp(index) {
    let parent = this._parent(index);
    if (index > 0 && this.heap[parent] > this.heap[index]) {
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      this._heapUp(parent);
    }
  }

  _heapDown(index) {
    let smallest = index;
    let leftChild = this._leftChild(index);
    let rightChild = this._rightChild(index);

    if (
      leftChild < this.heap.length &&
      this.heap[smallest] > this.heap[leftChild]
    ) {
      smallest = leftChild;
    }
    if (
      rightChild < this.heap.length &&
      this.heap[smallest] > this.heap[rightChild]
    ) {
      smallest = rightChild;
    }

    if (smallest !== index) {
      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];
      this._heapDown(smallest);
    }
  }

  insert(val) {
    this.heap.push(val);
    this._heapUp(this.heap.length - 1);
  }

  extractMin() {
    const min = this.peek();
    this.heap[0] = this.heap.pop();
    this._heapDown(0);
    return min;
  }

  update(index, newValue) {
    const oldValue = this.heap[index];
    this.heap[index] = newValue;
    if (oldValue > newValue) {
      this._heapUp(index);
    } else if (oldValue < newValue) {
      console.log("small");
      this._heapDown(index);
    }
  }

  peek() {
    return this.heap[0];
  }
}

const heap2 = new minHeap();

heap2.insert(50);
heap2.insert(30);
heap2.insert(10);
heap2.insert(20);
heap2.insert(15);
heap2.insert(13);
heap2.insert(26);
heap2.insert(17);

// console.log(heap2.peek());
// console.log(heap2.heap);

console.log(heap2.extractMin());
console.log(heap2.heap);

heap2.update(0, 20);
console.log(heap2.heap);
