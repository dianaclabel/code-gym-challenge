function countBy(x, n) {
  //creo un array para guardar los multiplos
  let arrMultiples = [];
  //con una condicional verifical que x y n sean mayores a 0
  if ( x > 0 && n > 0){
  // uso un ciclo for para iterar desde 1 hasta igual a n
    for(let i = 1; i <= n; i++){
  // Multiplico x por el indice i en cada iteracion
      let multiple = x * i
      console.log(multiple);
  // Agrego el multiplo al array
      arrMultiples.push(multiple);
      
    }
  }

  return arrMultiples;
}