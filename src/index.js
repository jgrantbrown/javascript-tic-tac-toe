$(document).ready(function(){


$('td').click(function() {
   if ($(this).text() == ""){
    $(this).text('X');
  }
})


$("#reset").on("click", function() {
    $("#board td").empty()
  });




});
