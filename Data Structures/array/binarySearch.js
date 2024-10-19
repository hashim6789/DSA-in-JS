arr = [1, 1, 1, 1, 2, 4, 5];

function findIndexOf(target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}
function findFirstIndexOf(target) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] === target) {
      result = mid;
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}
function findSecondIndexOf(target) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] === target) {
      result = mid;
      start = mid + 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}

function findNearestSmallElementOf(target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] === target) {
      return arr[mid - 1];
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return;
}

console.log(findIndexOf(2));
console.log(findFirstIndexOf(1));
console.log(findSecondIndexOf(1));
console.log(findNearestSmallElementOf(4));
