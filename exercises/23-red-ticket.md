# Red Ticket

👉[ Aquí encuentras el ejercicio.](https://the-winter.github.io/codingjs/exercise.html?name=redTicket&title=Logic-1)

You have a red lottery ticket showing ints a, b, and c, each of which is 0, 1, or 2. If they are all the value 2, the result is 10. Otherwise if they are all the same, the result is 5. Otherwise so long as both b and c are different from a, the result is 1. Otherwise the result is 0.

# Examples

```
  redTicket(2, 2, 2) → 10
  redTicket(2, 2, 1) → 0
  redTicket(0, 0, 0) → 5

```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/23-redTicket.js)

```
  function redTicket(a, b, c){
  if( a === 2 && b === 2 && c ===2){
    return 10
  }else if( a=== b && b === c){
    return 5
  }else if( a != b && c != a){
    return 1
  }else{
    return 0
  }

}

```
