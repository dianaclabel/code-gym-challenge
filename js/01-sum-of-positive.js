function positiveSum(arr) {
  // devolver suma solo de numero positivos.
  // si no hay nada que sumar la suma por defecto es cero.

  //definir una variable.
  let numberPositive = 0;
  // iterar cada uno de los elementos del array.
  for (let i = 0; i < arr.length; i++) {
    // verificar si es positivo o que sea igual a cero.
    if (arr[i] >= 0) {
      // si es positivo se le agregara a la varible definida de lo contrario no.
      numberPositive += arr[i];
    }
  }

  return numberPositive;
}
