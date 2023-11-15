# Multiples

Write a function called findMultiples that takes two numbers, number and limit, and returns an array with the multiples of number up to the limit, excluding the limit.
Then use the findMultiples function to get the multiples of 5 up to 50

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/06-multiples.js)

```
  function encontrarMultiplos(numero, limite) {
    let multiplos = [numero];
    let multiplicador = 2;
    while (multiplos[multiplos.length - 1] < limite) {
      multiplos.push(numero * multiplicador);
      multiplicador += 1;
    }
    multiplos.pop();
    console.log(multiplos);
  }

  encontrarMultiplos(5, 50);

```
