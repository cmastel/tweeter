$(document).ready(function() {

  $("textarea").on('keyup', function() {
    let remainingChars = 140 - $( this ).val().length;
    $( this ).parent().children( ".counter" ).text( remainingChars );

    if (remainingChars < 0) {
      $( this ).parent().children( ".counter" ).css("color", "red");
    }
    
  });

});