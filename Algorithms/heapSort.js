// function heapSort(arr) {
//   buildMaxHeap(arr);
//   // console.log(arr);
//   for (let i = arr.length - 1; i >= 0; i--) {
//     [arr[i], arr[0]] = [arr[0], arr[i]];
//     heapDown(arr, i, 0);
//   }
//   return arr;
// }

// function buildMaxHeap(arr) {
//   for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
//     heapDown(arr, arr.length, i);
//   }
// }

// function heapDown(arr, n, index) {
//   let largest = index;
//   let left = 2 * index + 1;
//   let right = 2 * index + 2;

//   if (left < n && arr[left] > arr[largest]) {
//     largest = left;
//   }
//   if (right < n && arr[right] > arr[largest]) {
//     largest = right;
//   }

//   if (largest !== index) {
//     [arr[index], arr[largest]] = [arr[largest], arr[index]];
//     heapDown(arr, n, largest);
//   }
// }

// console.log(heapSort([2, 5, 2, 2, 1, 6, 74, 2, 3]));

// function heapSort(arr) {
//   buildMaxHeap(arr);

//   for (let i = arr.length - 1; i >= 0; i--) {
//     [arr[0], arr[i]] = [arr[i], arr[0]];
//     heapDown(arr, i, 0);
//   }
//   return arr;
// }

// function buildMaxHeap(arr) {
//   for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
//     heapDown(arr, arr.length - 1, i);
//   }
// }

// function heapDown(arr, size, index) {
//   let largest = index;
//   let left = 2 * index + 1;
//   let right = 2 * index + 2;

//   if (left < size && arr[left] > arr[largest]) {
//     largest = left;
//   }
//   if (right < size && arr[right] > arr[largest]) {
//     largest = right;
//   }
//   if (index !== largest) {
//     [arr[index], arr[largest]] = [arr[largest], arr[index]];
//     heapDown(arr, size, largest);
//   }
// }

// console.log(heapSort([80, 15, 90, 35, 12, 65, 33, 80, 15, 90, 35, 12, 65, 33]));

function heapSort(arr) {
  buildMaxHeap(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    heapDown(arr, i, 0);
  }
  return arr;
}

function buildMaxHeap(arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapDown(arr, arr.length - 1, i);
  }
}

function heapDown(arr, size, index) {
  let largest = index;
  let leftChild = 2 * index + 1;
  let rightChild = 2 * index + 2;

  if (leftChild < size && arr[leftChild] > arr[largest]) {
    largest = leftChild;
  }

  if (rightChild < size && arr[rightChild] > arr[largest]) {
    largest = rightChild;
  }

  if (largest !== index) {
    [arr[largest], arr[index]] = [arr[index], arr[largest]];
    heapDown(arr, size, largest);
  }
}

console.log(heapSort([80, 15, 90, 35, 12, 65, 33, 80, 15, 90, 35, 12, 65, 33]));
