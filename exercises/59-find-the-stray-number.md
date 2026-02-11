# Find the stray number
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples: 

```
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/59-find-the-stray-number.js)

```
function stray(numbers) {
  const [a, b, c, ...rest] = numbers;
  
  if (a === b) {
    if (a === c) {
      return rest.find(n => n !== a)
    } else {
      return c
    }
  } else {
    if (a === c) {
      return b
    } else {
      return a
    }
  }
}
  
```