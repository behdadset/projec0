let boxes = {a:"3", b:"4", c:"5", d:"6", e:"7", f:"8", g:"9", h:"10", i:"11"};
let counterDraw = 0;
let turn = 0;
let flag = {a:true, b:true, c:true, d:true, e:true, f:true, g:true, h:true, i:true};
let x = 0;
let o = 0;

const myFunction = function(box){
  if (flag[`${box}`]){
    if (turn === 0){
      $(`.${box}`).css('background-image', 'url("images/x2.png")');
      turn = 1;
      boxes[`${box}`] = "1";

    } else {
      $(`.${box}`).css('background-image', 'url("images/donut.png")');
      turn = 0;
      boxes[`${box}`] = "2";
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
    } else {
      counterDraw++;
      if(counterDraw === 9 ){
        $(".finish").text("DRAW!");
        $(".finish").css("fontSize", "60px");
        $(".restart").css("width", "10%");
        
      }
      
    }
    flag[`${box}`] = false;
  }
}

const winner = function(win){
  if (win === "1"){
    $(".finish").text("Player X is the winner.");
    $(".finish").css("fontSize", "60px");
    $(".restart").css("width", "10%");
    
    Object.keys(flag).forEach(function(key){ flag[key] = false });
    x++;
    $(".playerX").text(`Player X = ${x}`);
    
  } 
  if (win === "2"){
    $(".finish").text("Player O is the winner.");
    $(".finish").css("fontSize", "60px");
    $(".restart").css("width", "10%");
    
    Object.keys(flag).forEach(function(key){ flag[key] = false });
    o++;
    $(".playerO").text(`Player O = ${o}`);
  }
}

const reset = function(){
  Object.keys(flag).forEach(function(key){ flag[key] = true });
  $(".restart").css("width", "0%");
  $(".restart").css("margin", "50px auto");
  $(".finish").text("");
  $(".finish").css("fontSize", "2px");
  $(".box").css('background-image', 'url()');
  boxes = {a:"3", b:"4", c:"5", d:"6", e:"7", f:"8", g:"9", h:"10", i:"11"};
  counterDraw = 0;
  turn = 0;
}

const xAvatar = function(){
  //$(".x1").css("border", "3px solid red");
  console.log("Clicked");
}

$(".restart").click(reset);
$(".x1").click(xAvatar);