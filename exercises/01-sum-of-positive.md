# Sum of positive

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/01-sum-of-positive.js)

```
function positiveSum(arr) {
  let numberPositive = 0;
  for( let i = 0 ;  i < arr.length ; i++) {
    if(arr[i] >= 0){
    numberPositive += arr[i];
    }
  }
  return numberPositive;
}
```
