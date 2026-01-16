# Highest Scoring Word

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

Examples:

```
the score of abad is 8 (1 + 2 + 1 + 4).

```
You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.


## Solución

🔗 [ Mirar solución con el método Reacto ](../js/46-highest-scoring-word)

```
  function high(x) {
  const words = x.split(" ");
  let maxScore = 0;
  let highestWord = "";

  words.forEach(word => {
    let score = 0;

    for (let letter of word) {
      score += letter.charCodeAt(0) - 96;
    }

    if (score > maxScore) {
      maxScore = score;
      highestWord = word;
    }
  });

  return highestWord;
}
  
```