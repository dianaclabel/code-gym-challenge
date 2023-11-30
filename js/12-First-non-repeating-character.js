function firstNonRepeatingLetter(s) {
  const letters = {};
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    letters[letter.toLowerCase()] ??= 0;
    letters[letter.toLowerCase()]++;
  }
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (letters[letter.toLowerCase()] === 1) {
      return letter;
    }
  }
  return "";
}

console.log(firstNonRepeatingLetter("zoo"));
