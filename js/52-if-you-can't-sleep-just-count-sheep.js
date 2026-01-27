const countSheep = (num) => {
  // se crea una variable para alamacenar el resultado
  let result = [];

  for (let i = 1; i <= num; i++) {
    //luego iteramos segun la cantidad de ovejas que se quieran contar
    // y vamos agregando a la variable result cada oveja contada
    result.push(`${i} sheep...`);
  }

  // se usa el metodo join para unir todos los elementos del array en un string
  return result.join("");
};