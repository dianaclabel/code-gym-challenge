# Count by X

Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples

```
  x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
  x = 2, n = 5  --> [2,4,6,8,10]
```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/37-count-by-x)

```
function countBy(x, n) {
  let arrMultiples = [];
  
  if ( x > 0 && n > 0){
    for(let i = 1; i <= n; i++){
      let multiple = x * i
      console.log(multiple);
      arrMultiples.push(multiple);
      
    }
  }

  return arrMultiples;
}
```