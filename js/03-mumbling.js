function accum(s) {
  let string = s.toLowerCase();
  let stringToArr = [...string];
  let arrRepeatLetters = [];

  for (let i = 0; i < stringToArr.length; i++) {
    let repeatLetter = stringToArr[i].repeat(i + 1);
    let firstLetterUpperCase = repeatLetter.replace(
      repeatLetter[i],
      repeatLetter[i].toUpperCase()
    );
    arrRepeatLetters.push(firstLetterUpperCase);
  }

  let arrToString = arrRepeatLetters.join("-");
  return arrToString;
}

console.log(accum("ZpglnRxqenU"));
