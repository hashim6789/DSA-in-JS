let arr = [1, 2, 3, 4, 5, 8, 11, 9];

function secondLargest() {
  let max = arr[0];
  let second = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      second = max;
      max = arr[i];
    } else if (second < arr[i]) {
      second = arr[i];
    }
  }
  return second;
}

console.log(secondLargest());
