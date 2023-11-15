function encontrarMultiplos(numero, limite) {
  let multiplos = [numero];
  let multiplicador = 2;
  while (multiplos[multiplos.length - 1] < limite) {
    multiplos.push(numero * multiplicador);
    multiplicador += 1;
  }
  multiplos.pop();
  console.log(multiplos);
}

encontrarMultiplos(5, 50);
