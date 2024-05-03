# Front Again

👉[ Aquí encuentras el ejercicio.](https://the-winter.github.io/codingjs/exercise.html?name=frontAgain&title=String-1)

Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

```


frontAgain('edited') → true
frontAgain('edit') → false
frontAgain('ed') → true


```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/29-front-again.js)

```js
function frontAgain(str) {
  if (str.length < 2) {
    return false;
  }

  if (str.length === 2) {
    return true;
  }

  if (str.substring(0, 2) === str.substring(str.length - 2, str.length)) {
    return true;
  }

  return false;
}
```
