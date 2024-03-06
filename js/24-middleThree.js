function middleThree(str) {
  let totalLetters = str.split("").length;

  let letterMiddle = Math.round((totalLetters - 1) / 2);

  return str.substring(letterMiddle - 1, letterMiddle + 2);
}

middleThree("solving");
