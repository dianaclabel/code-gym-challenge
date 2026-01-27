# If you can't sleep, just count sheep!!

If you can't sleep, just count sheeps!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.



## Solución

🔗 [ Mirar solución con el método Reacto ](../js/52-if-you-can't-sleep-just-count-sheep)

```
 const countSheep = (num) => {
  let result = [];

  for (let i = 1; i <= num; i++) {
    result.push(`${i} sheep...`);
  }

  return result.join("");
};
  
```