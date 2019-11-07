$(document).ready(function() {

  // $("form").submit(function(event) {
  //   event.preventDefault();
    
  //   const userInput = $( this ).serialize().slice(5);
  //   if (!userInput) {
  //     $("#error-message").text('🚨 There was no content in your tweet. 🚨');
  //     $("#error-message").slideDown("medium");
  //   } else if (userInput.length > 140) {
  //     $("#error-message").text('🚨 Your tweet is longer than 140 characters. 🚨');
  //     $("#error-message").slideDown("medium");
  //   } else {
  //     $.ajax({
  //       method: 'POST',
  //       url: '/tweets/',
  //       data: $( this ).serialize(),
  //       success: () => {
  //         this.reset();
  //         loadTweets();
  //         // $("#error-message").css("display", "none");
  //         $("#error-message").slideUp("medium");

  //       }
  //     })
  //   }
  // })

});
