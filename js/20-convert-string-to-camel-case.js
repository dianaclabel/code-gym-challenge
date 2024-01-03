function toCamelCase(str) {
  let wordCamelCase = [];
  let convertArr = str.split("-");
  console.log(convertArr);
  for (let i = 0; i < convertArr.length; i++) {
    if (convertArr[i][0] === convertArr[0][0]) {
      wordCamelCase.push(convertArr[0]);
    }

    wordCamelCase.push(
      convertArr[i][0].toUpperCase() + convertArr[i].substring(1)
    );
  }

  console.log(wordCamelCase);
}

toCamelCase("the-stealth-warrior");
