# Sum of odd numbers
Given the triangle of consecutive odd numbers:
```
            1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
```
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
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