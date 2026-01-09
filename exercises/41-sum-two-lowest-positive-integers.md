# Sum of two lowest positive integers
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

```
  [10, 343445353, 3453445, 3453545353453] should return 3453455.

```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/41-sum-two-lowest-positive-integers)

```
  function sumTwoSmallestNumbers(numbers) {  
  let firtsNumberLow = Math.min(...numbers);
  let numbersLow =[firtsNumberLow];
   
  let arrNew = numbers.filter((number)=> number !== firtsNumberLow);
  let secondNumberLow =  numbersLow.push(Math.min(...arrNew));
  let total = 0
   numbersLow.map((n)=>  total +=n)

 
  return total
  
  

}
  
```