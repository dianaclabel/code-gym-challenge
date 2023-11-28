// function firstLast6(nums) {
//   return nums[0] === 6 || nums.at(-1) === 6;
// }

function firstLast6(nums) {
  //Se crea un array con el primer y ultimo elemnto de el array
  //Se utiliza el metodo includes para saber si hay un seis, lo cual retornara true o false
  return [nums[0], nums.at(-1)].includes(6);
}

console.log(firstLast6([1, 2, 6]));
