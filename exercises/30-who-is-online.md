# Who's online?

👉[ Aquí encuentras el ejercicio.](https://www.codewars.com/kata/5b6375f707a2664ada00002a/train/javascript)

Tienes una app de chat, ¿cómo saber quién está online?

Quieres mostrar a tus usuarios quiénes de tus amigas o amigos están online y
disponibles para chatear.

Dado un arreglo de objetos que contiene nombre de usuario, estado y tiempo desde
la ultima actividad (en minutos), crea una función para determinar quién está
`online`, `offline` y `away`.

Si alguien está `online` pero su `lastActivity` fue hace más de 10 minutos, entonces
es considerado `away`.

Los datos de entrada tienen la siguiente estructura:

```js
[
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];
```

La salida correspondiente a los datos de entrada sería la siguiente:

```js
  {
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
```

Si, por ejemplo, ningún usuario está online, la salida debería lucir así:

```js
  {
  offline: ['Lucy'],
  away: ['Bob']
}
```

`username` será siempre un string; `status` será siempre uno de los siguientes
valores: `online` o `offline`; `lastActivity` será siempre un numero >= 0.

Finalmente, si no tienes ningún amigo o amiga un tu app de chat, el input será
un arreglo vacío `[]`. Si este es el caso, debes retornar un objeto vacío `{}`.

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/30-who-is-online.js)

```js
const whosOnline = (friends) => {
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
```
