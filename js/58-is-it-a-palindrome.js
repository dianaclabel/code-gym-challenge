function isPalindrome(x) {
  x = x.toLowerCase();
  let arrX = x.split("");
  if(arrX.length === 0 ){
    return true
  }
  for(let i=0; i < arrX.length;i++){
    if(arrX[i]!== arrX[arrX.length-(i+1)]){
      return false
    }
    
  }
  return true
}