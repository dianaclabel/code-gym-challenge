# Secret Society

👉[ Aquí encuentras el ejercicio.](https://edabit.com/challenge/zQm9YZTTFPhNtYjDr)

A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

Create a function that takes in an array of names and returns the name of the secret society.

# Examples

```
  societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

  societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

  societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"

```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/19-society-name.js)

```
  function societyName(friends) {

  let lettersSocietyName = [];
  friends.forEach((e) => {
    lettersSocietyName.push(e[0].toUpperCase());
  });
  lettersSocietyName.sort();

  let societyName = lettersSocietyName.join("");

	return societyName;

  }

```
