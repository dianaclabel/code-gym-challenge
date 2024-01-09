function toCamelCase(str) {
  let wordCamelCase = [];
  let convertArr;

  // if (str.includes("_")) {
  //   convertArr = str.split("_");
  //   console.log(convertArr);
  // } else if (str.includes("-")) {
  //   convertArr = str.split("-");
  //   console.log(convertArr);
  // } else {
  //   let borrarGuionBajo = str.split("_");
  //   convertArr = borrarGuionBajo.split("-");
  //   console.log(convertArr);
  // }

  if (str.includes("_") && str.includes("-")) {
    let borrarGuionBajo = str.split("_");
    let newWord = borrarGuionBajo;
    console.log(newWord);
    // let convertArr = newWord.split("-");
    let convertArr = newWord.forEach((e) => {
      if (e.includes("-")) {
        newWord.push(e.split("-"));
      }
    });

    console.log(convertArr);
  } else if (str.includes("_")) {
    convertArr = str.split("_");
    console.log(convertArr);
  } else {
    convertArr = str.split("-");
    console.log(convertArr);
  }

  for (let i = 0; i < convertArr.length; i++) {
    let esPrimero = false;

    if (convertArr[i][0] === convertArr[0][0]) {
      wordCamelCase.push(convertArr[0]);
      esPrimero = true;
    }

    if (!esPrimero) {
      wordCamelCase.push(
        convertArr[i][0].toUpperCase() + convertArr[i].substring(1)
      );
    }
  }

  console.log(wordCamelCase.join("").toString());
}

toCamelCase("the-stealth_warrior");

// function toCamelCase(str){
//   let wordCamelCase = [];
//  let convertArr;

//  if (str.includes("_")) {
//    convertArr = str.split("_");
//   for (let i = 0; i < convertArr.length; i++) {

//    let esPrimero = false;

//    if (convertArr[i][0] === convertArr[0][0]) {
//      wordCamelCase.push(convertArr[0]);
//      esPrimero = true;
//    }

//    if (!esPrimero) {
//      wordCamelCase.push(
//        convertArr[i][0].toUpperCase() + convertArr[i].substring(1)
//      );
//    }
//  }
//  } else if (str.includes("-")) {
//    convertArr = str.split("-");
//    for (let i = 0; i < convertArr.length; i++) {

//    let esPrimero = false;

//    if (convertArr[i][0] === convertArr[0][0]) {
//      wordCamelCase.push(convertArr[0]);
//      esPrimero = true;
//    }

//    if (!esPrimero) {
//      wordCamelCase.push(
//        convertArr[i][0].toUpperCase() + convertArr[i].substring(1)
//      );
//    }
//  }
//  }

// return wordCamelCase.join("").toString();
// }
