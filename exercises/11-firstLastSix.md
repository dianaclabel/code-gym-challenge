# firstLastSix

Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

Examples

```
  firstLast6([1, 2, 6]) → true
  firstLast6([6, 1, 2, 3]) → true
  firstLast6([13, 6, 1, 2, 3]) → false
```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/11-firstLastSix.js)

```
  function firstLast6(nums) {
      return [nums[0], nums.at(-1)].includes(6);
  }

  console.log(firstLast6([1, 2, 6]));
```
