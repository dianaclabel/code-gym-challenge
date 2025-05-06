var createCounter = function(n) {

  let count = n; 

  return function() {
      return count++;
  };

  //pre-incremento ++count, en la primera llamado  devolvería el numero + su incremento , ej. 0 + 1 = 1
  //post-incremento count++, en la primera llamado devolvería el numero sin su incremento, ej. 0 + 1 = 0
   
};