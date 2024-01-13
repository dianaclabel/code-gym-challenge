function blackjack(a, b) {
  // Si ambos tienen valor 21 retorna 21
  if (a === 21 || b === 21) {
    return 21;
    // si los valores es mayor a 21 retornara 0
  } else if (a > 21 && b > 21) {
    return 0;
    // retornar el numero mas pequeño si tenermos numeros mayores a  21
  } else if (a <= 21 && b > 21) {
    return a;
  } else if (a > 21 && b <= 21) {
    return b;
    // si los numeros son menore a 21 retornar el numero mayor
  } else if (a <= 21 && b <= 21) {
    return Math.max(a, b);
  }
}
