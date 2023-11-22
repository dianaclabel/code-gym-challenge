# Find pairs

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.

```
arrayDiff([1,2],[1]) == [2]
```

If a value is present in b, all of its occurrences must be removed from the other:

```
arrayDiff([1,2,2,2,3],[2]) == [1,3]
```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/08-array-diff.js)

```
function arrayDiff(a, b) {
  let numbersFilters = [];

  for (let i = 0; i < a.length; i++) {
    let diferente = true;

    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        diferente = false;
        break;
      }
    }

    if (diferente) {
      numbersFilters.push(a[i]);
    }
  }

  return numbersFilters;
}

console.log(arrayDiff([12, 8, -8, 11, -18, -10, 1], [12, 8]));

```
