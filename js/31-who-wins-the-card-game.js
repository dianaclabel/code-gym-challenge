function whoWon(players, extraCard, extraTakers) {
  // tener un array vacio de respuesta
  // recorrer el objeto players y por cada jugador (for ..in)
  // tomamos el string y si encontramos una letra la reemplazar en '10'
  // separar por ', ' y convertir a numeros (split)
  // vamos a sumar los valores
  // si extraCard es A, K, Q o J lo remplazamos por 10
  // si el nombre del jugador esta contenido en extraTakers le sumamos extraCard

  // //agrego al jugador al array
  // //ordenar el array segun puntajes
  if (typeof extraCard === "string") {
    extraCard = 10;
  }

  // agrego al array. al jugador en la posicion que le corresponda
  const perdedores = [];
  const ganadores = [];
  const Orderganadores = [];
  for (const prop in players) {
    //console.log(prop, players[prop]);
    const nombre = prop;
    let cartas = players[prop];
    cartas = cartas.replace("A", "10");
    cartas = cartas.replace("K", "10");
    cartas = cartas.replace("Q", "10");
    cartas = cartas.replace("J", "10");
    const numeros = cartas.split(", ").map(Number);

    let suma = numeros.reduce((acumulador, valorActual) => {
      return acumulador + valorActual;
    }, 0);

    if (extraTakers.includes(nombre)) {
      suma += extraCard;
    }

    suma <= 21
      ? ganadores.push([nombre, suma])
      : perdedores.push([nombre, suma]);
    // console.log(nombre, suma);

    for (let i = 0; i < ganadores.length; i++) {
      for (let j = i + 1; j < ganadores.length; j++) {
        if (ganadores[i][1] > ganadores[j][1]) {
          Orderganadores[0].push(ganadores[i]);
        } else {
          Orderganadores.push(ganadores[j]);
        }
      }
    }
  }

  console.log(perdedores);
  console.log(Orderganadores);

  // vamos a tener 2 arreglos, ganadores y perdedores
  // al tener la suma total del jugador priemero vamos a validar si gano o perdio
  // si el puntaje es menor o igual a 21, gano, si es mayor perdio

  // agregar en array de ganadores
  // si el array esta vacio, agrego directo con push
  // si no, validar
}

var players = { Ben: "5, 2", Amy: "4, 3", Sam: "3, 10" };

whoWon(players, 3, ["Ben", "Amy"]);
