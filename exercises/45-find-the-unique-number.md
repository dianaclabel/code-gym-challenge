# Find the unique number

There is an array with some numbers. All numbers are equal except for one. Try to find it!

Examples:

```
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

```
It’s guaranteed that array contains at least 3 numbers.


## Solución

🔗 [ Mirar solución con el método Reacto ](../js/45-find-the-unique-number)

```
  function findUniq(arr) {
  const first = arr[0];
  const countFirst = arr.filter(n => n === first).length;

  if (countFirst > 1) {
    return arr.find(n => n !== first);
  }

  return first;
}
  
```