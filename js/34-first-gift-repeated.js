function prepareGifts(gifts) {
  let uniqueNumbers = [];

  for (let i = 0; i < gifts.length; i++) {
    !uniqueNumbers.includes(gifts[i]) && uniqueNumbers.push(gifts[i]);
  }

  const preparedGifts = uniqueNumbers.sort((a, b) => a - b);

  return preparedGifts;
}

//another form  of resolution
function prepareGifts0(gifts) {
  return [...new Set(gifts)].toSorted((a, b) => a - b);
}

console.log(prepareGifts([1, 11, 3, 2, 2, 1]));
