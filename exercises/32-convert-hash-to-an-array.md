# Convert-hash-to-an-array

👉[ Aquí encuentras el ejercicio.](https://www.codewars.com/kata/59557b2a6e595316ab000046/train/javascript)

Convert a hash into an array. Nothing more, Nothing less.

```
{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into
```

```
[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
Good Luck!
```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/32-convert-hash-to-an-array.js)

```js
function convertHashToArray(hash) {
  const result = [];
  for (const prop in hash) {
    console.log(prop);
    const array = [prop, hash[prop]];
    result.push(array);
  }
  result.sort();
  console.log(result);
  return result;
}
```
