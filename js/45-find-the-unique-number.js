function findUniq(arr) {
  // Primero guardo el primer número del array
  const first = arr[0];
  // Luego obtengo la cantidad de veces que aparece ese número en el array
  const countFirst = arr.filter(n => n === first).length;
  // si el primer número aparece más de una vez, busco y retorno el número que es diferente
  if (countFirst > 1) {
    return arr.find(n => n !== first);
  }

  return first;
}