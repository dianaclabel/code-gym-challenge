# Middle Three

👉[ Aquí encuentras el ejercicio.](https://the-winter.github.io/codingjs/exercise.html?name=middleThree&title=String-1)

Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.

# Examples

```
  middleThree('Candy') → and
  middleThree('and') → and
  middleThree('solving') → lvi

```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/24-middleThree.js)

```
  function middleThree(str){

    let totalLetters = str.split("").length;

    let letterMiddle = Math.round((totalLetters - 1) / 2);

    return str.substring(letterMiddle - 1, letterMiddle + 2);

}
```
