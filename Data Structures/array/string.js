let str = "Hello World!";

function reverseString() {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function isPalindrome() {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

function firstNonRepeater() {
  for (let i = 0; i < str.length; i++) {
    let flag = true;
    for (let j = 0; j < str.length; j++) {
      if (i != j && str[i] === str[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return str[i];
    }
  }
}

function replaceSpaceWithHyphen() {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += "-";
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(reverseString());
console.log(isPalindrome());
console.log(firstNonRepeater());
console.log(replaceSpaceWithHyphen());
