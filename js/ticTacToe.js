
let boxes = {a:"3", b:"4", c:"5", d:"6", e:"7", f:"8", g:"9", h:"10", i:"11"};

let turn = 0;
let flag = {a:true, b:true, c:true, d:true, e:true, f:true, g:true, h:true, i:true};
const myFunction = function(box){
  if (flag[`${box}`]){
    if (turn === 0){
      $(`.${box}`).attr('id', 'x');
      turn = 1;
      boxes[`${box}`] = "1"
    } else {
      $(`.${box}`).attr('id', 'o');
      turn = 0;
      boxes[`${box}`] = "2"
    }
    if (boxes.a === boxes.b && boxes.a === boxes.c ||
      boxes.a === boxes.d && boxes.a === boxes.g 
      ){
        winner(boxes["a"]);
    } else if (boxes.d === boxes.e && boxes.d === boxes.f ||
      boxes.b === boxes.e && boxes.b === boxes.h ||
      boxes.a === boxes.e && boxes.a === boxes.i ||
      boxes.c === boxes.e && boxes.c === boxes.g 
      ){
      winner (boxes["e"]);
    } else if (boxes.g === boxes.h && boxes.g === boxes.i){
      winner (boxes["g"]);
    } else if (boxes.c === boxes.f && boxes.c === boxes.i){
      winner (boxes["c"]);
    }
    flag[`${box}`] = false;
  }
}

const winner = function(win){
  if (win === "1"){
    $(".finish").text("Player X is winner.");
    Object.keys(flag).forEach(function(key){ flag[key] = false });
  } 
  if (win === "2"){
    $(".finish").text("Player O is winner.");
    Object.keys(flag).forEach(function(key){ flag[key] = false });
  }
}
