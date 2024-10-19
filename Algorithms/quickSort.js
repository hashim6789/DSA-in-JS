// function partition(arr, low, high) {
//   let pivot = arr[high];
//   let i = low - 1;
//   for (let j = low; j < high; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       const temp = arr[j];
//       arr[j] = arr[i];
//       arr[i] = temp;
//     }
//   }
//   i++;
//   const temp = arr[i];
//   arr[i] = pivot;
//   arr[high] = temp;
//   return i;
// }

// function quickSort(arr, low, high) {
//   if (low < high) {
//     const pIdx = partition(arr, low, high);
//     quickSort(arr, low, pIdx - 1);
//     quickSort(arr, pIdx + 1, high);
//   }
// }

// let arr = [2, 4, 1, 3, 5, 5, 9];
// console.log("Before : ", arr);
// quickSort(arr, 0, arr.length - 1);
// console.log("After : ", arr);

function partition(arr, start, end) {
  let pivot = arr[end];
  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i++;
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  i++;
  const temp = arr[i];
  arr[i] = pivot;
  arr[end] = temp;
  return i;
}

function quick(arr, start, end) {
  if (start < end) {
    const pid = partition(arr, start, end);
    quick(arr, start, pid - 1);
    quick(arr, pid + 1, end);
  }
}

let arr = [2, 4, 1, 3, 5, 5, 9];
console.log("Before : ", arr);
quick(arr, 0, arr.length - 1);
console.log("After : ", arr);
