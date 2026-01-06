# Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

Examples

```
   [1, 2, 2] it should return 9 

```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/39-square-sum)

```
  function squareSum(numbers){
    let numbersSquare=[]
    let total=0
    numbers.forEach((number)=> numbersSquare.push(number*number) )
    numbersSquare.forEach((numberSquare)=> total+=numberSquare)
    return total
  }
```