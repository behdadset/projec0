let turn = 0;
const myFunction = function(box){
  console.log(`box ${box}`);
  if (turn === 0){
    $(`.${box}`).attr('id', 'x');
    turn = 1;
  } else {
    $(`.${box}`).attr('id', 'o');
    turn = 0;
  }
  
  //$(`.box ${box}`).css('background-image', 'url( "images/o.png" )');
}

