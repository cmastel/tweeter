/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  
  loadTweets();
  $("form").submit(newTweet);
  $("textarea").on('keyup', remainingCharCounter);
  $(".fa-angle-double-down").click(showNewTweet);

});
