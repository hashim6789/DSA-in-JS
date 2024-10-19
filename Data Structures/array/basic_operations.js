// arr =[6,7,10,2,5,2]

// // for(let i=0;i<arr.length;i++){

// // }

// function push(val){
//     arr =
// }

function factorial(n) {
  if (n <= 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}

// console.log(factorial(6));

function fibonacci(n) {
  if (n <= 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// console.log(fibonacci(8));

function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}

// console.log(reverseString("hashim"));

function sumOfDigit(n) {
  if (n <= 0) {
    return 0;
  }
  return sumOfDigit(parseInt(n / 10)) + (n % 10);
}

// console.log(sumOfDigit(10));

function powerOf(x, y) {
  if (y <= 1) {
    return x;
  }
  return powerOf(x, y - 1) * x;
}

// console.log(powerOf(3, 3));

function permutationOf(n, r) {
  return factorial(n) / factorial(n - r);
}

// console.log(permutationOf(6, 2));

function combinationOf(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

// console.log(combinationOf(5, 3));

class customArray {
  constructor() {
    this.length = 0;
    this.array = [];
  }

  printArray() {
    let output = "[";
    for (let i = 0; i < this.length; i++) {
      output += `${this.array[i]},`;
    }
    console.log(`${output}]`);
  }

  pushArray(val) {
    this.array[this.length] = val;
    this.length++;
  }

  popArray() {
    const removedElement = this.array[this.length - 1];
    this.length--;
    return removedElement;
  }

  unshiftArray(val) {
    for (let i = this.length; i > 0; i--) {
      this.array[i] = this.array[i - 1];
    }
    this.array[0] = val;
    this.length++;
  }

  shiftArray() {
    const removedElement = this.array[0];
    for (let i = 1; i < this.length; i++) {
      this.array[i - 1] = this.array[i];
    }
    this.length--;
    return removedElement;
  }

  findArray(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.array[i] === val) {
        return i;
      }
      return -1;
    }
  }

  removeArray(val) {
    const index = this.findArray(val);
    if (index === -1) {
      return "The element does't exist!";
    }
    const removedElement = this.array[index];
    for (let i = index; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.length--;
    return removedElement;
  }

  mapArray(callback) {
    // console.log(callback);
    let result = new customArray();
    for (let i = 0; i < this.length; i++) {
      result.pushArray(callback(this.array[i], i, this.array));
    }
    return result;
  }

  filterArray(callback) {
    let result = new customArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this.array[i], i, this.array)) {
        result.pushArray(this.array[i]);
      }
    }
    return result;
  }

  removeNthElement(n) {
    if (n > this.length - 1 || n < 0) {
      return "The invalid value of n";
    }
    const removedElement = this.array[n];
    for (let i = n; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.length--;
    return removedElement;
  }

  reverseArray() {
    if (this.length < 0) {
      return;
    }
    let i = 0;
    let j = this.length - 1;
    while (i < j) {
      let temp = this.array[i];
      this.array[i] = this.array[j];
      this.array[j] = temp;
      i++;
      j--;
    }
  }

  findLargestAndSmallest() {
    let largest = this.array[0];
    let smallest = this.array[0];

    for (let i = 0; i < this.length; i++) {
      if (largest < this.array[i]) {
        largest = this.array[i];
      }

      if (smallest > this.array[i]) {
        smallest = this.array[i];
      }
    }
    console.log("Largest Value = ", largest);
    console.log("Smallest Value = ", smallest);
  }

  reverseSubPart(start, end) {
    while (start < end) {
      const temp = this.array[start];
      this.array[start] = this.array[end];
      this.array[end] = temp;
      start++;
      end--;
    }
  }

  rotateByK(k) {
    if (k > this.length) {
      k %= this.length;
    }
    console.log(k);
    if (k > 0) {
      this.reverseSubPart(0, this.length - 1);
      this.reverseSubPart(0, k - 1);
      this.reverseSubPart(k, this.length - 1);
    }
  }

  isPalindrome() {
    let start = 0;
    let end = this.length - 1;
    while (start < end) {
      if (this.array[start] !== this.array[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }
}

let a = new customArray();
a.pushArray(10);
a.pushArray(20);
a.pushArray(30);
a.pushArray(20);
a.pushArray(10);
a.printArray();
a.rotateByK(20);
a.printArray();
console.log(a.isPalindrome());
console.log(a.popArray());
a.printArray();
a.unshiftArray(20);
a.printArray();
console.log(a.shiftArray());
a.printArray();
console.log(a.findArray(20));
console.log(a.removeArray(10));

const mapResult = a.mapArray((x) => 2 * x);
// console.log(result);
mapResult.printArray();
console.log(mapResult.removeNthElement(3));
mapResult.printArray();

mapResult.reverseArray();
mapResult.printArray();

mapResult.findLargestAndSmallest();

const filterResult = a.filterArray((x) => x > 30);
filterResult.printArray();

// //array push
// let arr = [];
// const push = (val) => {
//   arr[arr.length] = val;
// };

// const print = () => {
//   let output = "[";
//   for (let i = 0; i < arr.length; i++) {
//     output += `${arr[i]},`;
//   }
//   console.log(`${output}]`);
// };

// const pop = () => {
//   const removedValue = arr[arr.length - 1];
//   delete arr[arr.length - 1];
//   return removedValue;
// };

// push(10);
// push(10);
// push(10);
// console.log(pop());
// print();
