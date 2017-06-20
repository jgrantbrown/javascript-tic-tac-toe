$(document).ready(function(){

// sets turn to either odd or even to decide whos turn and X or O
var turn = 0

$('td').click(function() {
   if ($(this).text()=== "") {
    if (turn % 2 === 0){
        $(this).text('X');
        // Add logic to checkWinner
        if (checkWinner('X')){
          $("#board td").empty()

        };
    }else if(turn % 2 !== 0){
          $(this).text('O');
          // Add logic to checkWinner
          if (checkWinner('O')){
            $("#board td").empty()
          };
        }else {
            alert("No Winner")
            turn = 0
            $("#board td").empty()
          }
turn++;
          }
  })


$("#reset").on("click", function() {
    $("#board td").empty()
  });

});


function checkWinner(player){


//  1|2|3
//  4|5|6
//  7|8|9

// CHeck for first row--> matches
  if ($('#board').find('#1').text() !== ''){
              if ($('#board').find('#1').text() == $('#board').find('#2').text()) {
                  if ($('#board').find('#1').text() == $('#3').text()) {
                      alert('Game over! '+player+' is the winner!');

                      $("#board td").empty()

                  }
              }
    }
// CHeck for second row--> matches
    if ($('#board').find('#4').text() !== ''){
                  if ($('#board').find('#4').text() == $('#board').find('#5').text()) {
                      if ($('#board').find('#4').text() == $('#6').text()) {
                          alert('Game over! '+player+' is the winner!');
                          $("#board td").empty()
                      }
                  }
        }
// CHeck for third row--> matches
    if ($('#board').find('#7').text() !== ''){
              if ($('#board').find('#7').text() == $('#board').find('#8').text()) {
                  if ($('#board').find('#7').text() == $('#9').text()) {
                      alert('Game over! '+player+' is the winner!');
                      $("#board td").empty()
                    }
                }
            }
// CHeck for first column--> matches
    if ($('#board').find('#1').text() !== ''){
            if ($('#board').find('#1').text() == $('#board').find('#4').text()) {
              if ($('#board').find('#1').text() == $('#7').text()) {
                  alert('Game over! '+player+' is the winner!');
                  $("#board td").empty()
                  }
                }
              }
// CHeck for second column--> matches
    if ($('#board').find('#2').text() !== ''){
                    if ($('#board').find('#2').text() == $('#board').find('#5').text()) {
                      if ($('#board').find('#2').text() == $('#8').text()) {
                          alert('Game over! '+player+' is the winner!');
                          $("#board td").empty()
                          }
                        }
                      }
// CHeck for third column--> matches
    if ($('#board').find('#3').text() !== ''){
                  if ($('#board').find('#3').text() == $('#board').find('#6').text()) {
                    if ($('#board').find('#3').text() == $('#9').text()) {
                        alert('Game over! '+player+' is the winner!');
                        $("#board td").empty()
                          }
                        }
                      }
// CHeck for lft to rght diagnol --> matches
        if ($('#board').find('#1').text() !== ''){
            if ($('#board').find('#1').text() == $('#board').find('#5').text()) {
              if ($('#board').find('#1').text() == $('#9').text()) {
                alert('Game over! '+player+' is the winner!');
                $("#board td").empty()
              }
                }
              }
// CHeck for rght to left diagnol --> matches
        if ($('#board').find('#3').text() !== ''){
          if ($('#board').find('#3').text() == $('#board').find('#5').text()) {
            if ($('#board').find('#3').text() == $('#7').text()) {
                 alert('Game over! '+player+' is the winner!')
                 emptyBoard()
                            }
                              }
                            }


}



function emptyBoard(){
  setInterval(function(){ $("#board td").empty() }, 2000);
}
