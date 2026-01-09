function sumTwoSmallestNumbers(numbers) {  
 let firstNumberLow = Math.min(...numbers);

  // Copiamos el array para no modificar el original
  let arrNew = [...numbers];

  // Eliminamos SOLO una ocurrencia del menor
  arrNew.splice(arrNew.indexOf(firstNumberLow), 1);

  let secondNumberLow = Math.min(...arrNew);

  return firstNumberLow + secondNumberLow;
  

}