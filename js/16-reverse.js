function reverse3(nums) {
  let arrNew = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    arrNew.push(nums[i]);
  }
  return arrNew;
}

reverse3([1, 2, 3]);
