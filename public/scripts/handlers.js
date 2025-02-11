// saves a new tweet to the "database"
// if there is an invalid input, a warning is shown and the input
// is not saved to the database
const newTweet = function(event) {
  event.preventDefault();
  const userInput = $(this).serialize().slice(5);
  if (!userInput) {
    emptyTweet();
  } else if (userInput.length > 140) {
    longTweet();
  } else {
    $.ajax({
      method: 'POST',
      url: '/tweets/',
      data: $(this).serialize(),
      success: () => {
        this.reset();
        loadTweets(true); // the optional parameter true ensures only the new tweet is prepended to the list
        $("#error-message").slideUp("medium");
        $(".counter").text(140);
      }
    })
  }
}

// show the number of characters remaining in a new tweet
// if the input is greater than 140, the value goes red
const remainingCharCounter = function() {
  let remainingChars = 140 - $(this).val().length;
  $(this).parent().children(".counter").text(remainingChars);
  if (remainingChars < 0) {
    $(this).parent().children(".counter").css("color", "red");
  }
  if (remainingChars >= 0) {
    $(this).parent().children(".counter").css("color", "#545149");
  }
}

// clicking the double down arrows allows the new tweet composition area to slide down, and back up when clicked again
const showNewTweet = function () {
  $(".new-tweet").slideToggle("slow");
  $("#show-new-tweet").css("transform", "translateY(4px)");
  $("textarea").focus();
}

// control the "button" which shows or hides the new tweet input area
const windowScroll = function() {
  $(".fa-chevron-circle-up").css("display", "inline");
}

const scrollButtonClicked = function() {
  $(".fa-chevron-circle-up").slideToggle("fast");
  $('html, body').animate({scrollTop:0}, 'fast');
  showNewTweet();
}
