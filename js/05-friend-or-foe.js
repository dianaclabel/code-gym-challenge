function friend(friends) {
  //crear un variable en el cual estaran los elementos filtrados
  //utilizar el metodo filter que me otorgara solo los que elementos que tienen 4 letras
  let forletters = friends.filter((friend) => friend.length === 4);
  // finalemnte se retornara
  return forletters;
}

friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]);
