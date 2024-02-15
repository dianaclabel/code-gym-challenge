# BiggerTwo

👉[ Aquí encuentras el ejercicio.](https://the-winter.github.io/codingjs/exercise.html?name=biggerTwo&title=Array-1)

Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.

# Examples

```
  biggerTwo([1, 2], [3, 4]) → 3,4
  biggerTwo([3, 4], [1, 2]) → 3,4
  biggerTwo([1, 1], [1, 2]) → 1,2

```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/22-biggerTwo.js)

```
  function biggerTwo(a, b){
  const sumaTotalA = a.reduce((acc, val) => acc + val, 0);
  const sumaTotalB = b.reduce((acc, val) => acc + val, 0);

  if(sumaTotalA > sumaTotalB){
    return a
  } else if (sumaTotalA < sumaTotalB){
    return b
  }else{
    return a
  }

}
```
