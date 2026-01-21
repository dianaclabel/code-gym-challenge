# Build a pile of Cubes

Your task is to construct a building which will be a pile of `n` cubes.  
The cube at the bottom will have a volume of `n³`, the cube above will have a volume of `(n − 1)³` and so on until the top which will have a volume of `1³`.

You are given the total volume `m` of the building.  
Being given `m`, can you find the number `n` of cubes you will have to build?


The parameter of the function `findNb` (`find_nb`, `find-nb`, `findNb`, …) will be an integer `m` and you have to return the integer `n` such as:
n^3 + (n - 1)^3 + (n - 2)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.


## Solución

🔗 [ Mirar solución con el método Reacto ](../js/49-build-a-pile-og-cubes)

```
  function findNb(m) {
  let total=0;
  let n = 0

  while(total < m){
      n+=1
   total = ((n * (n + 1)) / 2) ** 2; 
  }
   console.log(n)
  
   return total === m ?  Number(n) :  -1
}

  
```