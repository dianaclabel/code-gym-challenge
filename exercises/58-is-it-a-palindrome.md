# Sum of odd numbers
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/58-is-it-a-palindrome.js
)

```
  function isPalindrome(x) {
  x = x.toLowerCase();
  let arrX = x.split("");
  if(arrX.length === 0 ){
    return true
  }
  for(let i=0; i < arrX.length;i++){
    if(arrX[i]!== arrX[arrX.length-(i+1)]){
      return false
    }
    
  }
  return true
}
  
```