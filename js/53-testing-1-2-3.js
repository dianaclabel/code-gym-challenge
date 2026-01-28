var number=function(array){
  // Se usa map para usar el valor y el index del array
  // se suma el index + 1 para que empiece desde 1 y no desde 0
  // se retorna un nuevo array con el formato deseado
  
  return array.map((letter, index) => `${index + 1}: ${letter}`);
}