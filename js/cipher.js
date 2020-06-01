
const cypher = function(msg){
  let code = "";
  for (let i = 0; i < msg.length; i++) {
    const elementCode = msg.charCodeAt(i);
    //console.log(elementCode)
    for (let y = 1; y <= 6; y++){
      for (let x = 1; x <= 5; x++){
        if(elementCode === (y*5+x+91)){
          console.log(x + "" + y)
        }

      }
    }
  
  }
  
}

console.log(cypher("ciphers are confusing!"));