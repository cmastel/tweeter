$(document).ready(function() {

  $("#show-new-tweet").click(
    function() {
      $(".new-tweet").slideDown("slow");
      $("#show-new-tweet").css("transform", "translateY(4px)");
      $("textarea").focus();
      }   
  );

  $("#show-new-tweet").hover(
    function() {
      $("#show-new-tweet").css("box-shadow", "0 0 15px #ffffff");
    },
    function() {
      $("#show-new-tweet").css("box-shadow", "none");
    }
  )

});