$(document).ready(function() {

  $(".tweets").hover(
    function() {
      $( this ).css("box-shadow", "5px 5px 5px #0C7BDC");
      $( this ).find("#username").css("display", "block")
      }, 
    function() {
      $( this ).css("box-shadow", "none");
      $( this ).find("#username").css("display", "none");
    }
  );

});