function likes(names) {
  // primero verificamos que el array no este vacio
  if( names.length === 0){
    return "no one likes this"
  }
  
  // Utilizo un ciclo for para recorrer el array, ademas la variable i me ayudara a identificar el indice
  // se podra usar  para aumentar el indice y asi obtener los siguientes nombres en el array
  for(let i = 0; i < names.length; i++){
    // segun la longitud del array se retornara un mensaje diferente
    if(names.length == 1){
      return names[i] + " likes this";
    }else if ( names.length == 2){
      return names[i] + " and " + names[i+1] + " like this"
    }else if(names.length == 3){
       return names[i] + ", " + names[i+1] + " and " + names[i+2] + " like this"
    }else if (names.length >= 4){
      let resto =  names.length - 2
      return names[i] + ", " + names[i+1] + " and " + resto + " others like this"
    }
  }
}