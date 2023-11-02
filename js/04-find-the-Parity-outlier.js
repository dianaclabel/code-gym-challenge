function findOutlier(integers) {
  // Creacion de variables con array vacio para colocar los valores que voy a obtener con el forEach
  let numbers = integers;
  let arrPar = [];
  let arrImpar = [];
  // Realizar la iteracion de cada uno de loa elemntos con forEach();
  numbers.forEach((element) => {
    // Utilizar el modulo para saber si es par o impar el numero.
    element % 2 ? arrPar.push(element) : arrImpar.push(element);
  });
  // Realizar una comparación segun la cantidad de elementos y mostrar el que tiene menor cantidad.
  return arrPar.length > arrImpar.length ? arrImpar[0] : arrPar[0];
}
