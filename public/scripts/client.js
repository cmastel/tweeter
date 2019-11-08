/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  
  loadTweets();
  $("form").submit(newTweet);
  $("textarea").on('keyup', remainingCharCounter);
  
  // show new tweet slider
  $("#nav-arrows").click(
    function() {
      $(".new-tweet").toggle("slow");
      $("#show-new-tweet").css("transform", "translateY(4px)");
      $("textarea").focus();
      }   
  );

  $("#header-arrows").click(
    function() {
      $(".new-tweet").toggle("slow");
      $("#show-new-tweet").css("transform", "translateY(4px)");
      $("textarea").focus();
      }   
  );

});
