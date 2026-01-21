function findNb(m) {
  let total=0;
  let n = 0

  while(total < m){
    n+=1
    total = ((n * (n + 1)) / 2) ** 2;
  }
   console.log(n)
  
   return total === m ?  Number(n) :  -1
}
