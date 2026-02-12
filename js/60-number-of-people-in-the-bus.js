var number = function(busStops){
  
  let people = 0
  
  busStops.forEach(([n1,n2])=>{
    people += n1 - n2;
  })
  
  return people;
}