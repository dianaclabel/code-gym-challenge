function high(x) {
  // se separa el strinf por palabras con un split
  const words = x.split(" ");
  let maxScore = 0;
  let highestWord = "";

  //Se itera cada palabra para obtener el total de cada palabra 
  words.forEach(word => {
    let score = 0;

    //Se relaiza un recorrido de las letras de la palabra
    // Se hace uso charCodeAt para darle el valor correspondiente de cada letra
    for (let letter of word) {
      //El total de la suma estara en score
      score += letter.charCodeAt(0) - 96;
    }

    //verificamos si el monto de cada palbra es mayor que el resto 
    // si es asi se guarda el numero mayor y la palabra que corresponde a tal numero 
    if (score > maxScore) {
      maxScore = score;
      highestWord = word;
    }
  });

  return highestWord;
}