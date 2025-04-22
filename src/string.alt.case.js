String.prototype.toAltCase = function () {
  return this.split("")
    .map((char) => {
      if (char === char.toLowerCase()) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
};
console.log("My name is John".toAltCase()); // "mY NAME IS jOHN"

String.prototype.toAltCase2 = function () {
  return [...this]
    .map((c) => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
    .join("");
};
