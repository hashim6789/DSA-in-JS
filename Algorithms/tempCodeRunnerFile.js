for (let i = arr.length - 1; i >= 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    heapDown(arr, i);
  }