function moveZeros(arr) {
  let countZero = 0;

  let arrNew = arr.filter((e) => {
    if (e === 0) {
      countZero++;
      return false;
    }
    return true;
  });

  return arrNew.concat(Array(countZero).fill(0));
}

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
