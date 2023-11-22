function arrayDiff(a, b) {
  let numbersFilters = [];

  for (let i = 0; i < a.length; i++) {
    let diferente = true;

    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        diferente = false;
        break;
      }
    }

    if (diferente) {
      numbersFilters.push(a[i]);
    }
  }

  return numbersFilters;
}

console.log(arrayDiff([12, 8, -8, 11, -18, -10, 1], [12, 8]));
