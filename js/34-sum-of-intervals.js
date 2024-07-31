function sumIntervals(intervals) {
  //TODO
  //iterar los elementos
  // obtener el primer y segundo elemento del subarray para hacer una condicional
  // utilizar el operador  && para saber si otro elemento se sobreponeen en el array presente
  //si es true guardar el primer elemento del array antiguo en una variable y con el segundo elemento seguimos realizando otra condicional.
  //cuando los deas no se interponen restar el elemento guardado con el ultimo.
  //Si hay mas elementos del array que no se interponen realizar una resta igual
  // Luego sumar el resultado de cada uno de los valores que se restaron.

  // for (let i = 0; i < intervals.length; i++) {
  //   let valorA = intervals[i][0];
  //   let valorB = intervals[i][0];

  //   for (let j = i + 1; j < intervals.length; j++) {
  //     if (valorA > intervals[j][0] && intervals[j][0] < valorB) {
  //       valorB = intervals[j][1];
  //     }
  //   }
  // }

  let noEstanMedio = [];
  let valorA = intervals[0][0];
  let valorB = intervals[0][0];

  for (let j = 0; j < intervals.length; j++) {
    if (valorA > intervals[j][0] && intervals[j][0] < valorB) {
      valorB = intervals[j][1];
    }

    noEstanMedio.push(intervals[j]);
  }
}
