$(document).ready(function(){

// sets turn to either odd or even to decide whos turn and X or O
var turn = 0

$('td').click(function() {
   if ($(this).text()=== "") {
    if (turn % 2 === 0){
        $(this).text('X');
        $("#urturn").text("It is O's Turn");
        // Add logic to checkWinner
         checkWinner('X')
    }else if(turn % 2 !== 0){
          $("#urturn").text("It is X's Turn");
          $(this).text('O');
          // Add logic to checkWinner
          checkWinner('O')
          };
        }
turn++;
  })


$("#reset").on("click", function() {
    $("#board td").empty()
  });

});


function checkWinner(player){
//  1|2|3
//  4|5|6
//  7|8|9
  let row1win = [$('#1')[0].innerHTML,$('#2')[0].innerHTML,$('#3')[0].innerHTML]
  let row2win = [$('#4')[0].innerHTML,$('#5')[0].innerHTML,$('#6')[0].innerHTML]
  let row3win = [$('#7')[0].innerHTML,$('#8')[0].innerHTML,$('#9')[0].innerHTML]
  let col1win = [$('#1')[0].innerHTML,$('#4')[0].innerHTML,$('#7')[0].innerHTML]
  let col2win = [$('#2')[0].innerHTML,$('#5')[0].innerHTML,$('#8')[0].innerHTML]
  let col3win = [$('#3')[0].innerHTML,$('#6')[0].innerHTML,$('#9')[0].innerHTML]
  let diag1win = [$('#1')[0].innerHTML,$('#5')[0].innerHTML,$('#9')[0].innerHTML]
  let diag2win = [$('#3')[0].innerHTML,$('#5')[0].innerHTML,$('#7')[0].innerHTML]


  let winningcombos =[row1win,row2win,row3win,col1win,col2win,col3win,diag1win,diag2win]
  let winner = [player,player,player]
  combostring= JSON.stringify(winningcombos)
  winnerstring= JSON.stringify(winner)

      if (combostring.includes(winnerstring)){

          setTimeout(function(){alert('Game over! '+player+' is the winner!')},500);
          setTimeout(function(){ $("#board td").empty() }, 1000)
          // $("#board td").empty()
        }

  }




// function emptyBoard(){
//   setTimeout(function(){ $("#board td").empty() }, 3000);
// }
