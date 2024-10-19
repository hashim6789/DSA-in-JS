// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
// }
// let arr = [5, 3, 3, 54, 3, 2, 5, 7, 98];
// console.log("Before : ", arr);
// insertion(arr);
// console.log("After : ", arr);

function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    const key = arr[i];
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

// i = 1;
// key = 3;
// j = -(1)[(3, 5)];
