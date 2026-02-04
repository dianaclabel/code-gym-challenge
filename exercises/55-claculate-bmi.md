# Calculate BMI
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/55-calculate_bmi)

```
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
}
  
```