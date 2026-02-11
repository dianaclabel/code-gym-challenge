function stray(numbers) {
  const [a, b, c, ...rest] = numbers;
  
  if (a === b) {
    if (a === c) {
      return rest.find(n => n !== a)
    } else {
      return c
    }
  } else {
    if (a === c) {
      return b
    } else {
      return a
    }
  }
}