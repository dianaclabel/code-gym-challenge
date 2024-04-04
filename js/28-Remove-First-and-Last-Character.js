function removeChar(str) {
  // utilizar un metodo de string
  // En caso de que el string sea menor a dos caracteres devolver el string,
  return str.length > 1 ? str.slice(1, -1) : str;
}

console.log(removeChar("h"));
