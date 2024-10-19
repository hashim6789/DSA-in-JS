let arr = [1, 2, 3, 1, 5];
let str = "hello";

function findElement(target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

function findIndexOf(target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

function findLastIndexOf(target) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

function findAllOccurrenceOf(target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      result.push(i);
    }
  }
  return result;
}

function charIncludes(char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return true;
    }
  }
  return false;
}

function largestNumber() {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

function countCharOccurrence(char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

function isSorted() {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(findElement(8));
console.log(findIndexOf(1));
console.log(findAllOccurrenceOf(1));
console.log(charIncludes("t"));
console.log(largestNumber());
console.log(countCharOccurrence("l"));
console.log(isSorted());
console.log(findLastIndexOf(1));
