# Counting sheep...

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).


## Examples:

```
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
  
```
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/54-counting-sheep)

```
function countSheeps(sheep) {
  let count = 0;
  sheep.forEach((s)=> s === true && count++ )  
  return count
}
  
```