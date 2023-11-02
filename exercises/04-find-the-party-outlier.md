# Find The Parity Outlier

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

```
  [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

  [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/04-find-the-Parity-outlier.js)

```
  function findOutlier(integers) {
    let numbers = integers;
    let arrPar = [];
    let arrImpar = [];
    numbers.forEach((element) => {
      element % 2 ? arrPar.push(element) : arrImpar.push(element);
    });

    return arrPar.length > arrImpar.length ? arrImpar[0] : arrPar[0];
  }

```
