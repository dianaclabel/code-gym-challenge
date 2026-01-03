function areYouPlayingBanjo(name) {
  // Se utiliza el método slice para obtener la primera letra del nombre
  let firstLetter = name.slice(0,1);
  console.log(firstLetter)
  //Usó una estructura condicional para determinar si la primera letra es "R" o "r"
  if(firstLetter === "R" || firstLetter ==="r" ){
  // Si es así, devuelve que la persona toca el banjo
    return name + " plays banjo"
  }
  // Si no, devuelve que la persona no toca el banjo
  return name + " does not play banjo";
}