# Who wins the card game?

👉[ Aquí encuentras el ejercicio.](https://www.codewars.com/kata/5a03157f8ba914fcf50000d4/train/javascript)

Ben, Amy y Sam están jugando a las cartas.
Es un poco como el blackjack, donde la persona cuyo puntaje es más cercano, pero
no mayor a 21 es el ganador.

Sin embargo, Ben, Amy y Sam pueden elegir una carta adicional si así lo desean.

También han decidido que los Ases (A, K, Q, J) siempre son iguales a 10.

Debes escribir una función que devuelva un array anidado de los jugadores y sus
puntuaciones en el orden de ganador a perdedor.

**Argumentos**

1. players: un objeto que contiene el nombre de cada jugador y sus cartas.
   Cada jugador deberá tener sus cartas agregadas para calcular su puntaje actual.

2. extraCard: una tarjeta adicional cuyo valor deberá agregarse a las
   puntuaciones de ciertos jugadores. (Puede ser un string o un number)

3. extraTakers: array que contiene los nombres de los jugadores que eligen que
   el valor de extraCard se agregue a su puntuación.

**Reglas**

1. La persona cuyo nombre está en el segundo argumento debe tener el valor de la
   tarjeta adicional agregado a su puntaje.

2. Si hay un empate, los jugadores con la misma puntuación deben presentarse en
   orden alfabético. Ejemplo: si Ben y Sam tienen una puntuación de 10, Ben debe
   escribirse primero.

3. Todas las tarjetas con imágenes (A, K, Q, J) son iguales a 10

4. Si la puntuación de un jugador supera los 21, no puede ganar.

**Ejemplo**

```js
const players = {
  Ben: "5, 2",
  Amy: "4, 3",
  Sam: "3, 10",
};

whoWins(players, 3, ["Ben", "Amy"])[
  //debería retornar
  (["Sam", 13], ["Amy", 10], ["Ben", 10])
];
```

## Objetivos de aprendizaje (OAs)

- Métodos de arrays
- Objetos (key, value)

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/31-who-wins-the-card-game.js)

```js
function whoWon(players, extraCard, extraTakers) {
  if (typeof extraCard === "string") {
    extraCard = 10;
  }
  const perdedores = [];
  const ganadores = [];
  for (const prop in players) {
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
    console.log(nombre, suma);
  }
}
```
