const whosOnline = (friends) => {
  // creamos un array vacio de online
  // creamos un array de offline
  // creamos un array de away
  // recorremos el array de amigos
  // por cada amigo revisamos su status
  // si el status es 'online' y lastActivity es <= a 10 guardamos el username en el array de online
  // si el status es 'online' y lastActiviy es mayor a 10 lo guardamos el username en el array away
  // si el status es 'offline'  guardamos el username en el array de offline
  // creamos un objeto vacio
  // validar si cada array tiene longitud mayor a 0,
  // si la tiene agregamos la propiedad correspondiente con el nombre del status

  const online = [];
  const offline = [];
  const away = [];

  for (let index = 0; index < friends.length; index++) {
    const friend = friends[index];

    if (friend.status === "online" && friend.lastActivity <= 10) {
      online.push(friend.username);
    }

    if (friend.status === "online" && friend.lastActivity > 10) {
      away.push(friend.username);
    }

    if (friend.status === "offline") {
      offline.push(friend.username);
    }
  }

  const respuesta = {};

  if (online.length > 0) {
    respuesta.online = online;
  }

  if (offline.length > 0) {
    respuesta["offline"] = offline;
  }

  if (away.length > 0) {
    //respuesta = {away, ...respuesta};
    respuesta.away = away;
  }

  console.log(respuesta);
  return respuesta;
};
