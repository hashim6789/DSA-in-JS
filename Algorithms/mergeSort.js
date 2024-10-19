// function merge(arr, left, mid, right) {
//   const n1 = mid - left + 1;
//   const n2 = right - mid;
//   // Create temp arrays
//   const L = new Array(n1);
//   const R = new Array(n2);
//   // Copy data to temp arrays L[] and R[]
//   for (let i = 0; i < n1; i++) L[i] = arr[left + i];
//   for (let j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];
//   let i = 0,
//     j = 0;
//   let k = left;
//   // Merge the temp arrays back into arr[left..right]
//   while (i < n1 && j < n2) {
//     if (L[i] <= R[j]) {
//       arr[k] = L[i];
//       i++;
//     } else {
//       arr[k] = R[j];
//       j++;
//     }
//     k++;
//   }
//   // Copy the remaining elements of L[], if there are any
//   while (i < n1) {
//     arr[k] = L[i];
//     i++;
//     k++;
//   }
//   // Copy the remaining elements of R[], if there are any
//   while (j < n2) {
//     arr[k] = R[j];
//     j++;
//     k++;
//   }
// }

// function mergeSort(arr, left, right) {
//   if (left >= right) {
//     return;
//   }
//   const mid = Math.floor(left + (right - left) / 2);
//   mergeSort(arr, left, mid);
//   mergeSort(arr, mid + 1, right);
//   merge(arr, left, mid, right);
// }
// function printArray(arr) {
//   console.log(arr.join(" "));
// }

function merge(left, right) {
  const lLength = left.length;
  const rLength = right.length;

  let i = 0;
  let j = 0;
  let mergeArr = [];
  while (i < lLength && j < rLength) {
    if (left[i] < right[j]) {
      mergeArr.push(left[i]);
      i++;
    } else {
      mergeArr.push(right[j]);
      j++;
    }
  }

  if (i < lLength) {
    mergeArr = mergeArr.concat(left.slice(i));
  }
  if (j < rLength) {
    mergeArr = mergeArr.concat(right.slice(j));
  }
  return mergeArr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const mid = parseInt(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([2, 5, 2, 2, 1, 6, 74, 2, 3]));

// function merge(left, right) {
//   const lLength = left.length;
//   const rLength = right.length;
//   let i = 0;
//   let j = 0;
//   let mergeArr = [];

//   while (i < lLength && j < rLength) {
//     if (left[i] < right[j]) {
//       mergeArr.push(left[i]);
//       i++;
//     } else {
//       mergeArr.push(right[j]);
//       j++;
//     }
//   }

//   mergeArr = mergeArr.concat(left.slice(i)).concat(right.slice(j)); // Properly concatenate remaining elements
//   console.log("merge =", mergeArr);
//   return mergeArr;
// }

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     // Also handle empty arrays
//     return arr;
//   }
//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }

// console.log(mergeSort([1, 4, 2, 5]));
