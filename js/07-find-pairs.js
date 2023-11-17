function encontrandoPares(num1, num2) {
  let resultado;
  // verificando si ambos son pares
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    resultado = num1 + num2;
    return resultado;
  }
  // verificando si uno de ellos son pares
  else if (num1 % 2 === 0 || num2 % 2 === 0) {
    resultado = num1 * num2;
    return resultado;
  }
  // verificando que ambos son impares
  else {
    resultado = "ninguno es par ";
    return resultado;
  }
}

console.log(encontrandoPares(4, 6));
