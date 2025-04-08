// the following way we can convert a "string" into a number
const arr1 = [9, 3, "7", "3"];
const way1 = arr1.map(Number);
const way2 = arr1.map((item) => parseInt(item));
const way3 = arr1.map((item) => +item);
const way4 = arr1.map((item) => Number(item));

/* 
instructions:
Given an array of integers as strings and numbers, return the sum of the array
values as if all were numbers.
*/
// approach 1 (My approach)
function sumMix(n) {
  return n.map(Number).reduce((accu, curr) => accu + curr, 0);
}
sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]);

// approach 2
function sumMix2(x) {
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}

// approach 3
const sumMix3 = (x) => x.reduce((a, b) => b + a, 0);
sumMix3(["5", "0", 9, 3, 2, 1, "9", 6, 7]);

// appraoch 4
function sumMix4(x) {
  var sum = 0;
  for (i = 0; i < x.length; i++) {
    sum += +x[i];
  }
  return sum;
}

// approach 5
const sumMix5 = (arr) => arr.reduce((sum, n) => sum + +n, 0);

// approach 6
//! using "eval" is an BIG security risk
// https://www.w3schools.com/jsref/jsref_eval.asp
function sumMix6(x) {
  return eval(x.join("+"));
}

// appraoch 7
function sumMix7(x) {
  let sum = 0;
  for (let num of x) {
    typeof num === "string" ? (sum += Number(num)) : (sum += num);
  }
  return sum;
}
