function countSheeps(sheep) {
  let count = 0;
  sheep.forEach((s)=> s === true && count++ )  
  return count
}