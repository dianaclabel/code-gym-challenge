function abbrevName(name) {
  // name convertir en array
  // Obtener la primera letra de cada palabra del array
  //convertirlo a upperCase
  let firtsLetter = name.split(" ").map((e) => e[0].toUpperCase());
  // agregar el punto con el metodo join
  let letterString = firtsLetter.join(".");

  return letterString;
}

abbrevName("Sam Harris");
