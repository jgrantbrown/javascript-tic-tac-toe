$(document).ready(function(){

// sets turn to either odd or even to decide whos turn and X or O
var turn = 0

$('td').click(function() {
 if ($(this).text()=== "") {
  if (turn % 2 === 0){
      $(this).text('X');
    }else {
        $(this).text('O');
  }
turn++;}
})




$("#reset").on("click", function() {
    $("#board td").empty()
  });




});
