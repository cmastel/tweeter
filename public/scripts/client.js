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


  $( window ).scroll(function() {
    $( ".fa-chevron-circle-up" ).css("display", "inline");
  });


  $('.scroll-button').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
    showNewTweet();
    $( ".fa-chevron-circle-up" ).css("display", "none");
    return false;
});


});
