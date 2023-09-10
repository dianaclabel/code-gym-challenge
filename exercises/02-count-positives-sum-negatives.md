# Count of positives / sum of negatives

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/02-count-positives-sum-negatives.js)

```
function countPositivesSumNegatives(input) {
  let sumNegative = 0;
  let countPositive = [];

  let result = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countPositive.push(input[i]);
    } else if (input[i] < 0) {
      sumNegative += input[i];
    }
  }

  result = [sumNegative, countPositive.length];
}

```
