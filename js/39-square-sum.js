function squareSum(numbers){
  //creamos un array para guardar los numeros al cuadrado y una variable para el total
  let numbersSquare=[]
  let total=0
  //hacemos uso del forEach para recorrer el array y ultiplicar cada numero por si mismo
  numbers.forEach((number)=> numbersSquare.push(number*number) )
  //recorremos el nuevo array y sumamos cada valor al total
  numbersSquare.forEach((numberSquare)=> total+=numberSquare)
  return total
}