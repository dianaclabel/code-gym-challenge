var solution = function (firstArray, secondArray) {
  //Realizamo una condicion para saber que ambos array tienen la misma cantidad de elementos
  //Crear una variable como acumulador
  //Utilizar un bucle
  //obtener el promedio y retornarlo
  if (firstArray.length !== secondArray.length)
    "No cuentan con la misma cantidad de elementos";

  let acumulator = 0;

  for (let i = 0; i < firstArray.length; i++) {
    let diferent = firstArray[i] - secondArray[i];
    let cuadrado = diferent * diferent;
    acumulator += cuadrado;
  }

  return acumulator / firstArray.length;
};
