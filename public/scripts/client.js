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
  $("#show-new-tweet").click(
    function() {
      $(".new-tweet").slideDown("slow");
      $("#show-new-tweet").css("transform", "translateY(4px)");
      $("textarea").focus();
      }   
  );

  $("#show-tweet-header").click(
    function() {
      $(".new-tweet").slideDown("slow");
      $("#show-new-tweet").css("transform", "translateY(4px)");
      $("textarea").focus();
      }   
  );

});
