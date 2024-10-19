function bubbleSort(arr) {
  let swapped;
  let n = arr.length;
  do {
    swapped = false;
    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    n--;
  } while (swapped);
}

let arr = [2, 4, 2, 34, 5, 3, 2];
console.log("Before : ",arr);
bubbleSort(arr);
console.log("After : ",arr);

// function bubble(arr) {
//   let n = arr.length;
//   let swapped;
//   for (let i = 0; i < n - 1; i++) {
//     swapped = false;
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         swapped = true;
//       }
//     }

//     if (swapped === false) {
//       break;
//     }
//   }
// }
