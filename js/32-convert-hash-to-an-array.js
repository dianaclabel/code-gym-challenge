function convertHashToArray(hash) {
  // crear un array
  // recorrer el objeto con un for in
  // obtenemos el nomre de la propiedad
  // crear un nuevo array y guardar el nombre de la prop
  // lo agregamos al array inicial // push
  // [[name],[age],[role]]
  // obtener el valor de la propiedad
  // lo agregamos al array de la prpiedad
  // ordenar alfabeticamente el array
  // regresamos el array
  const result = [];
  for (const prop in hash) {
    console.log(prop);
    const array = [prop, hash[prop]];
    //     array.push(prop);
    //     array.push(hash[prop]);
    result.push(array);
    //result.push([prop, hash[prop]]);
  }
  result.sort();
  console.log(result);
  return result;
}
