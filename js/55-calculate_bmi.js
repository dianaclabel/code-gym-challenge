function bmi(weight, height) {
  
  let imc = weight/(height*height)
  
  if ( imc <= 18.5){
    return "Underweight"
  }else if ( imc <= 25.0){
    return "Normal"
  }else if( imc <= 30.0){
    return "Overweight"
  }else  if (imc > 30.0 ){
     return  "Obese"
  }
};