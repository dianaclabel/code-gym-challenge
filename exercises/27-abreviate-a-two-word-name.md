# Abreviate a two word name

👉[ Aquí encuentras el ejercicio.](https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript)

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

```

Sam Harris => S.H

patrick feeney => P.F


```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/27-abreviate-a-two-word-name.js)

```
  function abbrevName(name) {
  let firtsLetter = name.split(" ").map((e) => e[0].toUpperCase());
  let letterString = firtsLetter.join(".");
  return letterString;
  }
```
