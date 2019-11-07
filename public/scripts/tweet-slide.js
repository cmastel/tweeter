$(document).ready(function() {

  $("#show-new-tweet").click(
    function() {
      $(".new-tweet").slideDown("slow");
      $("#show-new-tweet").css("transform", "translateY(4px)");
      $("textarea").focus();
      }   
  );


});