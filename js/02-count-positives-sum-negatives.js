function countPositivesSumNegatives(input) {
  //Realizar recuento de los nuemeros positivos.
  //hacer suma de todos los numeros negativos.
  //cero no cuenta como numero positivo onegativo.

  //Crear una variable para la suma de los numeros negativos y para el recuento de numero positivos.
  let sumNegative = 0;
  let countPositive = [];

  let result = [];
  //Utilizar for para iterar el arrray
  for (let i = 0; i < input.length; i++) {
    //Utilizar un condicional para tener todos los numeros excepto el cero.
    if (input[i] > 0) {
      //Si es mayor a cero se agrega a la variable definida anteriormente.
      countPositive.push(input[i]);
    } else if (input[i] < 0) {
      //Si es menor realizar una suma  con el valor anterior de la variable sumNegative
      sumNegative += input[i];
    }
  }

  result = [sumNegative, countPositive.length];

  //Calcular la cantidad de numeros positivos y colocar el valor en una variable llamada result junto
  //la suma de numeros negativos
}
