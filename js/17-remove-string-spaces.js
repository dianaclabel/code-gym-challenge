function noSpace(x) {
  // cponvierto el string en array
  let arr = x.split("");
  //filtro solo las letras con el metodo filter
  let filter = arr.filter((e) => e != " ");
  // uno todos loe elemntos del array y convierto en string.
  return filter.join("");
}
