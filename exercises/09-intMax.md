# intMax

https://the-winter.github.io/codingjs/exercise.html?name=intMax&title=Warmup-1

Completa la función intMax que recibe tres valores tipo int, a b c y retorna el mayor.

Ejemplo

```

    intMax(1, 2, 3) → 3
    intMax(1, 3, 2) → 3
    intMax(3, 2, 1) → 3

```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/09-intMax.js.js)

```
function intMax(a, b, c){
  if((a > b) && (a>c)){
    return a
     } else if ((b > a) && (b > c)){
       return b
     }
  return c
}
```
