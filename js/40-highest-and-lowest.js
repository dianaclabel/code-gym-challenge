function highAndLow(numbers) {
  //Separé los números en un array y los convertí a tipo Number
  const nums = numbers.split(" ").map(Number);
  // Se utiliza Math.max y Math.min con el operador spread para encontrar los valores máximo y mínimo. Despues se retorna.
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}