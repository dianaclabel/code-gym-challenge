function bouncingBall(h,  bounce,  window) {
  //Primero valido que height sea mayor a 0, que el rebote este entre 0 y 1 y que la ventana sea menor a la altura inicial
  // en caso de que no se cumplan estas condiciones retorno -1
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1
  }
  
  // Inicializo la variables seeTheBall en 1 porque la primera vez que la pelota cae se ve desde la ventana
  // heightBounce es la altura a la que rebota la pelota despues de caer
    let seeTheBall = 1
    let heightBounce = h * bounce
   
    // Hago uso de while para iterar mientras la altura del rebote sea mayor a la altura de la ventana
    // Cada vez que la pelota rebota y supera la altura de la ventana se suma 2 a seeTheBall
    // Se recalcula  heightBounce multiplicando la altura del rebote por el factor de rebote
    while(heightBounce > window){
      seeTheBall+=2
      heightBounce *= bounce
    }
    
    return seeTheBall
    
 
}