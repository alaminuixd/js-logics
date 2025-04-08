/* 
Instruction:
Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6]
*/
// appraoch 1 (my solution)
function maps(x) {
  return x.map((num) => num * 2);
}
// appraoch 2
function maps2(n) {
  const doubled = [];
  for (let i = 0; i < n.length; i++) {
    doubled.push(n[i] * 2);
  }
  return doubled;
}

// approach 3 (interesting)
function maps3(x) {
  var arr = [];
  for (let i = 0; i < x.length; i++) {
    arr[i] = x[i] + x[i];
  }
  return arr;
}
