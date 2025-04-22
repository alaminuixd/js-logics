const humanYearsCatYearsDogYears = function (humanYears) {
  if (!humanYears) {
    console.log("The argument humanYear is empty");
    return;
  }
  if (humanYears < 1) {
    console.log("No human year available");
    return;
  }

  let catYear = 0;
  let dogYear = 0;

  if (humanYears === 1) {
    catYear = 15;
    dogYear = 15;
  } else if (humanYears === 2) {
    catYear = 15 + 9;
    dogYear = 15 + 9;
  } else {
    catYear = 15 + 9 + (humanYears - 2) * 4;
    dogYear = 15 + 9 + (humanYears - 2) * 5;
  }

  return [humanYears, catYear, dogYear];
};
