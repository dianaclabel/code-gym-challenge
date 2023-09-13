# Mumbling

This time no story, no theory. The examples below show you how to write function accum:
Examples:

```
  accum("abcd") -> "A-Bb-Ccc-Dddd"
  accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  accum("cwAt") -> "C-Ww-Aaa-Tttt"
```

The parameter of accum is a string which includes only letters from a..z and A..Z.

🔗 [ Mirar solución con el método Reacto ](../js/03-mumbling.js)

## Solución

```
  function accum(s) {
  let string = s.toLowerCase();
  let stringToArr = [...string];
  let arrRepeatLetters = [];

  for (let i = 0; i < stringToArr.length; i++) {
    let repeatLetter = stringToArr[i].repeat(i + 1);
    let firstLetterUpperCase = repeatLetter.replace(
      repeatLetter[i],
      repeatLetter[i].toUpperCase()
    );
    arrRepeatLetters.push(firstLetterUpperCase);
  }

  let arrToString = arrRepeatLetters.join("-");
  return arrToString;
  }

```
