# blackjack

👉[ Aquí encuentras el ejercicio.](https://the-winter.github.io/codingjs/exercise.html?name=blackjack&title=Logic-2)

Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.

# Examples

```
  blackjack(19, 21) → 21
  blackjack(21, 19) → 21
  blackjack(19, 22) → 19

```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/21-blackjack.js)

```
function blackjack(a, b){
  if (a === 21 || b === 21) {
    return 21;
  } else if (a > 21 && b > 21) {
    return 0;
  } else if (a <= 21 && b > 21) {
    return a;
  } else if (a > 21 && b <= 21) {
    return b;
  } else if (a <= 21 && b <= 21) {
    return Math.max(a, b);
  }
}

```
