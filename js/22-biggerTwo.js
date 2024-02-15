function biggerTwo(a, b) {
  // Se obtiene la suma de cada array( a y b)
  const sumaTotalA = a.reduce((acc, val) => acc + val, 0);
  const sumaTotalB = b.reduce((acc, val) => acc + val, 0);

  // Si el valor de la suma de A es mayor , retornara el A
  // Si el valor de la suma de B es mayor , retornara el B
  // Si el valor de la suma de ambos son iguales , retornara A
  if (sumaTotalA > sumaTotalB) {
    return a;
  } else if (sumaTotalA < sumaTotalB) {
    return b;
  } else {
    return a;
  }
}
