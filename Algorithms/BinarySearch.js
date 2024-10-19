const binarySearch = (arr, target) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let mid = parseInt((min + max) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
    console.log("mid = ", mid);
  }
  return -1;
};

console.log(binarySearch([1, 3, 5, 6, 7, 8, 9], 9));
