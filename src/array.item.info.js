const hayStack = [
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "Needle",
  "randomJunk",
];

function findNeedle(haystack) {
  const needleInfo = {};
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i].toLowerCase() === "needle".toLowerCase()) {
      needleInfo.position = i + 1;
      needleInfo.index = i;
      break;
    }
  }
  try {
    if (needleInfo.position === undefined && needleInfo.index === undefined) {
      throw new Error("No item found");
    }
    return `found the needle at ${needleInfo.position} and the index is ${needleInfo.index}`;
  } catch (error) {
    return error.message;
  }
}

const result = findNeedle(hayStack);
console.log(result);
