function redTicket(a, b, c) {
  if (a === 2 && b === 2 && c === 2) {
    return 10;
  } else if (a === b && b === c) {
    return 5;
  } else if (a != b && c != a) {
    return 1;
  } else {
    return 0;
  }
}
