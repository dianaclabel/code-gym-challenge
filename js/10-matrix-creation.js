function generarMatriz10x10() {
  let matriz = [];
  let value = 1;
  for (let i = 0; i < 10; i++) {
    let fila = [];
    for (let j = 0; j < 10; j++) {
      fila.push(value);
      value++;
    }
    matriz.push(fila);
  }
  return matriz;
}

console.log(generarMatriz10x10());

function sumaMatriz(arr) {
  let total = 0;

  arr.forEach((e) => {
    const initialValue = 0;
    const sumaArr = e.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

    total += sumaArr;
  });

  console.log(total);

  return total;
}

sumaMatriz(generarMatriz10x10());
