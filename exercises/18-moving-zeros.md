# Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

Examples:

```
  moveZeros([false,1,0,1,2,0,1,3,"a"])
  // returns[false,1,1,2,1,3,"a",0,0]

```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/18-moving-zeros.js)

```
 function moveZeros(arr) {
  let countZero = 0;

  let arrNew = arr.filter((e) => {
    if (e === 0) {
      countZero++;
      return false;
    }
    return true;
  });

 return arrNew.concat(Array(countZero).fill(0));
}
```
