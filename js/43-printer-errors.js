function printerError(s) {
  //primero creo una variable para contar los errores
    let errors = 0
  //luego obtengo la longitud de la cadena
    let length = s.length;
  // en este array guardo las letras que representan errores
  const letrasN_Z = [
  "n","o","p","q","r","s","t",
  "u","v","w","x","y","z"
]
  //uso split para convertir la cadena en un array y luego uso forEach para iterar sobre cada letra
  // utilizo el indlude para verificar si la letra esta en el array de letrasN_Z
  // si la letra esta en el array incremento el contador de errores
   s.split("").forEach((letter)=> (letrasN_Z.includes(letter) && errors++ ));
    
  
    return errors+'/'+length;
}