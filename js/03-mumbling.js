function accum(s) {
  //convertir el string en un array y que este uppercase
  //rterar el array y segun el numero de su indice repetir la misma cantidad de letras
  //colocarlo en una variable que tiene como valor un array convertirlo a string.

  let string = s;
  let stringToArr = s.split(",");
  let arrRepeatLetter = [];

  for (let i = 0; i < stringToArr.length; i++) {
    let repeatLetter = stringToArr[i].repeat(i);
    arrRepeatLetter.push(repeatLetter);
    console.log(repeatLetter);
  }
}

console.log(accum("ZpglnRxqenU"));
