# Remove First and Last Character

👉[ Aquí encuentras el ejercicio.](https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript)

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

```
removeChar('eloquent') ➞ 'loquen';
removeChar('country') ➞ 'ountr';

```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/28-Remove-First-and-Last-Character.js)

```
 function removeChar(str) {
  return str.slice(1, -1);
}
```
