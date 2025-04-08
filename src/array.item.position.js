const hayStack = [
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
];
// function with for loop
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i].toLowerCase() === "needle".toLowerCase()) {
      return `found the needle at position ${i}`;
    }
  }
}

const result = findNeedle(hayStack);
console.log(result);

// using recursive function
function findNeedleRecur(arr, index = 0) {
  if (index === arr.length) return "Item not found";
  //console.log(arr[index]);
  if (arr[index] === "junk") {
    return `found the ${arr[index]} at position ${index + 1}`;
  }
  return findNeedleRecur(arr, index + 1);
}
const result2 = findNeedleRecur(hayStack);
console.log(result2);
