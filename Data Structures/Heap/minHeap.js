class MinHeap {
  constructor() {
    this.heap = [];
  }

  _leftChild(i) {
    return 2 * i + 1;
  }
  _rightChild(i) {
    return 2 * i + 2;
  }

  _parent(i) {
    return Math.floor((i - 1) / 2);
  }

  getMin() {
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this._heapifyUp(this.heap.length - 1);
  }

  // _heapifyUp(index) {
  //   let parent = this._parent(index);
  //   while (index > 0 && this.heap[index] < this.heap[parent]) {
  //     [this.heap[index], this.heap[parent]] = [
  //       this.heap[parent],
  //       this.heap[index],
  //     ];
  //     index = parent;
  //     parent = this._parent(index);
  //   }
  // }

  _heapifyUp(index) {
    const parent = this._parent(index);
    if (index > 0 && this.heap[parent] > this.heap[index]) {
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      this._heapifyUp(parent);
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === -1) return this.heap.pop();

    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown(0);
    return min;
  }

  _heapifyDown(index) {
    let smallest = index;
    let left = this._leftChild(index);
    let right = this._rightChild(index);

    if (left < this.heap.length && this.heap[smallest] > this.heap[left]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[smallest] > this.heap[right]) {
      smallest = left;
    }

    if (smallest !== index) {
      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];
      this._heapifyDown(smallest);
    }
  }

  update(index, newValue) {
    let oldValue = this.heap[index];
    this.heap[index] = newValue;
    if (newValue < oldValue) {
      this._heapifyUp(index);
    } else {
      this._heapifyDown(index);
    }
  }

  buildHeap() {
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this._heapifyDown(i);
    }
  }
}

const heap1 = new MinHeap();
heap1.insert(40);
heap1.insert(30);
heap1.insert(20);
heap1.insert(10);
heap1.insert(50);
heap1.insert(35);
heap1.insert(15);
heap1.update(2, 45);

// console.log(heap1.extractMin());
// console.log(heap1.extractMin());
console.log(heap1.heap);

heap1.heap = [1, 34, 2, 1, 6, 1, 4, 3];
heap1.buildHeap();
console.log(heap1.heap);
