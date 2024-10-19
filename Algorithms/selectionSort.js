function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
}
const arr = [2, 5, 2, 2, 1, 6, 74, 2, 3];
console.log("Before : ", arr);
selection(arr);
console.log("After : ", arr);

function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    const temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
}
