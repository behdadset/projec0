//Variables
let boxes = ["3", "4", "5", "6", "7", "8", "9", "10", "11"]; //If its X will be 1 if O will be 2
let counterDraw = 0; // If its 9 the game is draw
let turn = "0"; // if its 0 its player X turn if its 1 its player O turn.
let flag = [true, true, true, true, true, true, true, true, true]; //Check if it is empty
let x = localStorage.getItem("x"); //Read from local storage
let o = localStorage.getItem("o");
let xBack ="images/x1.png" //Preferred avatars 
let oBack = "images/o1.png"
let opponent = "" // Play with computer

//Get from local storage
if ( x != null){
   $(".playerX").text(`Player X = ${x}`);
}
if ( o != null){
  $(".playerO").text(`Player O = ${o}`);
}

//Showing Reset Score button
const resetScorBtn = function(){
  if( o != 0 || x != 0){
    $(".resetScore").css("visibility", "visible");
  }
}

//Showing the winner notification and reset button.
const winner = function(win){
  if (win === "0"){
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
  if (win === "1"){
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

//Evaluating the winning or draw situation
const winning = function(newBox){
  if (newBox[0] === newBox[1] && newBox[0] === newBox[2] ||
    newBox[0] === newBox[3] && newBox[0] === newBox[6] ||
    newBox[3] === newBox[4] && newBox[4] === newBox[5] ||
    newBox[1] === newBox[4] && newBox[1] === newBox[7] ||
    newBox[0] === newBox[4] && newBox[0] === newBox[8] ||
    newBox[2] === newBox[4] && newBox[2] === newBox[6] ||
    newBox[6] === newBox[7] && newBox[6] === newBox[8] ||
    newBox[2] === newBox[5] && newBox[2] === newBox[8]){
      return true;
  } else {
    return false;
  }
}

//Checking empty spaces on the table
const checkEmpty = function(){
  let empty = [];
      for(let i = 0; i < flag.length; i++){
        if (flag[i] === true){
          empty.push(i);
        }
      }
      return empty;
}

//Choosing Id for Computer opponent
const getId = function (){
  const rId = checkEmpty();
  const outId = rId[Math.floor(Math.random() * rId.length)];
  return outId;
}

//Reset the table and continue the game
const reset = function(){
  Object.keys(flag).forEach(function(key){ flag[key] = true });
  $(".restart").css("width", "0%");
  $(".restart").css("margin", "50px auto");
  $(".finish").text("");
  $(".finish").css("fontSize", "2px");
  $(".box").css('background-image', 'url()');
  boxes = ["3", "4", "5", "6", "7", "8", "9", "10", "11"];
  counterDraw = 0;
  turn = "0";
}

//Choosing avatars for players
const xAvatar = function(xNumber){
  const x = xNumber.data.xNum;
  $(".x").css("border", "2px solid black");
  $(`.${x}`).css("border", "4px solid red");
  xBack = `images/${x}.png`;
}

const oAvatar = function(oNumber){
  const o = oNumber.data.oNum;
  $(".o").css("border", "2px solid black");
  $(`.${o}`).css("border", "4px solid red");
  oBack = `images/${o}.png`
}

//Start button
const start = function () {
  $(".container1").css("display", "none");
  $(".start").css("visibility", "hidden");
  $(".headerImage").css("visibility", "visible");
  $(".playerX").css("visibility", "visible");
  $(".playerO").css("visibility", "visible");
  $(".container").css("display", "block");
  $(".exit").css("display", "fixed");
  turn = "0";
}

const drawCheck = function(){
  counterDraw++;
  if(counterDraw === 9 ){
    $(".finish").text("DRAW!");
    $(".finish").css("fontSize", "60px");
    $(".restart").css("width", "10%");
    $(".restart").css("visibility", "visible");
  } 
}

//Exit button
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

//Reset score button
const resetScore = function(){
  localStorage.setItem("x", 0);
  localStorage.setItem("o", 0);
  x = 0;
  o = 0;
  $(".playerX").text(`Player X = 0`);
  $(".playerO").text(`Player O = 0`);
  $(".resetScore").css("visibility", "hidden");
}

// Game Function
const myFunction = function(id){
    if (flag[id]){
      if (turn === "0"){
        $(`#${id}`).css('background-image', "url(" + xBack + ")");
        turn = "1";
        boxes[`${id}`] = "1";
        if (winning(boxes)){
          winner ("0");
        } else {
          drawCheck(); 
        }
        flag[id] = false;
        if (opponent === "computer"){
          const newId = getId();
          myFunction(newId);
        }
      } else{
        $(`#${id}`).css('background-image', "url(" + oBack + ")");
        turn = "0";
        boxes[`${id}`] = "2";
        if (winning(boxes)){
          winner ("1");
        } else {
          drawCheck();
        }
        flag[id] = false;
      }
      
  }
}

resetScorBtn();

//Action listeners
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
