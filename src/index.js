var turn = 0



$(document).ready(function(){

// sets turn to either odd or even to decide whos turn and X or O
    $('td').click(function() {

     if ($(this).text()=== "") {
        if (turn % 2 === 0){
            $(this).text('X');
            $("#urturn").text("It is O's Turn");
              checkWinner('X')
        }else {
              $("#urturn").text("It is X's Turn");
              $(this).text('O');
              checkWinner('O')
              }
      }
    // checkTie()
    console.log(turn)
  });

  $("#reset").on("click", function() {
      $("#board td").empty()
      $("#urturn").text("X's Starts")
      turn = 0;
    });
})







function checkWinner(player){
//  1|2|3
//  4|5|6
//  7|8|9

if (player == "X"){
  plyr = 1
  nextup= "O"
}else if(player == "O"){
  plyr = 0
  nextup ="X"
}
  let row1 = [$('#1')[0].innerHTML,$('#2')[0].innerHTML,$('#3')[0].innerHTML]
  let row2 = [$('#4')[0].innerHTML,$('#5')[0].innerHTML,$('#6')[0].innerHTML]
  let row3 = [$('#7')[0].innerHTML,$('#8')[0].innerHTML,$('#9')[0].innerHTML]
  let col1 = [$('#1')[0].innerHTML,$('#4')[0].innerHTML,$('#7')[0].innerHTML]
  let col2 = [$('#2')[0].innerHTML,$('#5')[0].innerHTML,$('#8')[0].innerHTML]
  let col3 = [$('#3')[0].innerHTML,$('#6')[0].innerHTML,$('#9')[0].innerHTML]
  let diag1 = [$('#1')[0].innerHTML,$('#5')[0].innerHTML,$('#9')[0].innerHTML]
  let diag2 = [$('#3')[0].innerHTML,$('#5')[0].innerHTML,$('#7')[0].innerHTML]


  let combos =[row1,row2,row3,col1,col2,col3,diag1,diag2]
  let winner = [player,player,player]
  combostring= JSON.stringify(combos)
  winnerstring= JSON.stringify(winner)

      if (combostring.includes(winnerstring)){
          $("#urturn").text(player+" Wins!")
          setTimeout(function(){ $("#board td").empty() }, 1000);
          setTimeout(function(){$("#urturn").text(nextup+"'s Turn")},3000)
          turn = plyr
        }else{
          turn++;

        }

  }

  // function checkTie(){
  // }
