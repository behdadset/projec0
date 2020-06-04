let boxes = {a:"3", b:"4", c:"5", d:"6", e:"7", f:"8", g:"9", h:"10", i:"11"};
let counterDraw = 0;
let turn = 0;
let flag = {a:true, b:true, c:true, d:true, e:true, f:true, g:true, h:true, i:true};
let x = localStorage.getItem("x");
let o = localStorage.getItem("o");
let xBack ="images/x1.png"
let oBack = "images/o1.png"
if ( x != null){
   $(".playerX").text(`Player X = ${x}`);
}
if ( o != null){
  $(".playerO").text(`Player O = ${o}`);
}



const resetScorBtn = function(){
  if( o != 0 || x != 0){
    $(".resetScore").css("visibility", "visible");
  }
}


const myFunction = function(box){
  if (flag[`${box}`]){
    if (turn === 0){
      $(`.${box}`).css('background-image', "url(" + xBack + ")");
      turn = 1;
      boxes[`${box}`] = "1";

    } else {
      $(`.${box}`).css('background-image', "url(" + oBack + ")");
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
        $(".restart").css("visibility", "visible");
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
    $(".restart").css("visibility", "visible");
    Object.keys(flag).forEach(function(key){ flag[key] = false });
    x++;
    // Store locally
    localStorage.setItem("x", x);
    $(".playerX").text(`Player X = ${x}`);
    
  } 
  if (win === "2"){
    $(".finish").text("Player O is the winner.");
    $(".finish").css("fontSize", "60px");
    $(".restart").css("width", "10%");
    $(".restart").css("visibility", "visible");
    Object.keys(flag).forEach(function(key){ flag[key] = false });
    o++;
    // Store locally
    localStorage.setItem("o", o);
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

const xAvatar = function(xNumber){
  const x = xNumber.data.xNum;
  $(".x").css("border", "2px solid black");
  $(`.${x}`).css("border", "4px solid red");
  xBack = `images/${x}.png`;
  console.log(xBack);
}

const oAvatar = function(oNumber){
  const o = oNumber.data.oNum;
  $(".o").css("border", "2px solid black");
  $(`.${o}`).css("border", "4px solid red");
  oBack = `images/${o}.png`
  console.log(oBack);
}

const start = function () {
  $(".container1").css("display", "none");
  $(".start").css("visibility", "hidden");
  $(".headerImage").css("visibility", "visible");
  $(".playerX").css("visibility", "visible");
  $(".playerO").css("visibility", "visible");
  $(".container").css("display", "block");
  $(".exit").css("display", "fixed");
  
}

const exit = function () {
  $(".container1").css("display", "block");
  $(".start").css("visibility", "visible");
  $(".headerImage").css("visibility", "hidden");
  $(".playerX").css("visibility", "hidden");
  $(".playerO").css("visibility", "hidden");
  $(".container").css("display", "none");
  $(".restart").css("visibility", "hidden");
  reset();
  resetScorBtn();
}

const resetScore = function(){
  localStorage.setItem("x", 0);
  localStorage.setItem("o", 0);
  x = 0;
  o = 0;
  $(".playerX").text(`Player X = 0`);
  $(".playerO").text(`Player O = 0`);
  $(".resetScore").css("visibility", "hidden");
}

resetScorBtn();

$(".start").click(start);
$(".restart").click(reset);
$(".resetScore").click(resetScore);
$(".exit").click(exit);

$(".x1").click({xNum: "x1"}, xAvatar);
$(".x2").click({xNum: "x2"}, xAvatar);
$(".x3").click({xNum: "x3"}, xAvatar);

$(".o1").click({oNum: "o1"}, oAvatar);
$(".o2").click({oNum: "o2"}, oAvatar);
$(".o3").click({oNum: "o3"}, oAvatar);
