# Firts non-repeating character

Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/12-First-non-repeating-character.js)

```
 function firstNonRepeatingLetter(s) {
  const letters = {};
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    letters[letter.toLowerCase()] ??= 0;
    letters[letter.toLowerCase()]++;
  }
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (letters[letter.toLowerCase()] === 1) {
      return letter;
    }
  }
  return "";
}

console.log(firstNonRepeatingLetter("zoo"));
```
