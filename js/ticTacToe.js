
let boxes = {a:"0", b:"0", c:"0", d:"0", e:"0", f:"0", g:"0", h:"0", i:"0"};

let turn = 0;
const myFunction = function(box){
  console.log(`box ${box}`);
  if (turn === 0){
    $(`.${box}`).attr('id', 'x');
    turn = 1;
    boxes[`${box}`] = "1"
  } else {
    $(`.${box}`).attr('id', 'o');
    turn = 0;
    boxes[`${box}`] = "2"
  }
  console.log(boxes[`${box}`]);
  if (boxes.a === boxes.b && boxes.a === boxes.c){
      if (boxes["a"] === "1"){
        console.log("Player X is winner.")
      } 
      if (boxes["b"] === "2"){
        console.log("Player O is winner.")
      }

  }
}

