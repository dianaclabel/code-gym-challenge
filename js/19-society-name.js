function societyName(friends) {
  // realizo un recorrido del array
  //obtengo la primera letra de cada elemento
  //Cada letra obtenida lo convierto en mayuscula y lo agrego a un array nuevo.
  let lettersSocietyName = [];

  friends.forEach((e) => {
    lettersSocietyName.push(e[0].toUpperCase());
  });
  // ordeno el array de manera alfabetica con el metodo sort.
  lettersSocietyName.sort();
  //Por ultimo uno todas las letras del array para que sea un solo elemento .

  let societyName = lettersSocietyName.join("");

  return societyName;
}

societyName(["adam", "sarah", "malcolm"]);
