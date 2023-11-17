# Find pairs

Develop a function for the following section:
That receives by parameter 2 numbers, and checks that if one of them is even, it returns. the multiplication of both, if both are even, it returns the sum of both, if neither is even, it returns 'neither is even'.

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/07-find-pairs.js)

```
  function encontrandoPares(num1, num2) {
  let resultado;
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    resultado = num1 + num2;
    return resultado;
  }
  else if (num1 % 2 === 0 || num2 % 2 === 0) {
    resultado = num1 * num2;
    return resultado;
  }
  else {
    resultado = "ninguno es par ";
    return resultado;
  }
}

console.log(encontrandoPares(4, 6));
```
