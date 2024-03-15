# Ordenar numeros

arreglo de numeros ordenados, tanto negativos como positivos

```
A = [-4, -1, 0, 2, 3]

```

retornes arreglo de numeros al cuadrado, pero también ordenados. Sin usar el metodo SORT.

```
 [0, 1, 4, 9, 16]
```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/25-ordenar-numbers.js)

```
  function ordenar(arr) {
  let alCuadrado = arr.map((e) => e * e);
  // [ 16, 1, 0, 4, 9 ]

  console.log(alCuadrado);

  for (let i = 0; i < alCuadrado.length; i++) {
    for (let j = 0; j < alCuadrado.length - 1; j++) {
      if (alCuadrado[j] > alCuadrado[j + 1]) {
        let num = alCuadrado[j];
        alCuadrado[j] = alCuadrado[j + 1];
        alCuadrado[j + 1] = num;
      }
    }
  }

  return alCuadrado;
}
ordenar([-4, -1, 0, 2, 3]);

```
