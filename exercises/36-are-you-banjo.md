# Are you playing Banjo?

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

Examples

```
 name + " plays banjo" 
 name + " does not play banjo"
```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/36-are-you-playing-banjo)

```
function areYouPlayingBanjo(name) {
  let firstLetter = name.slice(0,1);
  console.log(firstLetter)
  if(firstLetter === "R" || firstLetter ==="r" ){
    return name + " plays banjo"
  }
  return name + " does not play banjo";
}
```