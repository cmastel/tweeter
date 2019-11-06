$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    
    const userInput = $( this ).serialize().slice(5);
    if (!userInput) {
      alert('There was no content in your tweet.');
    } else if (userInput.length > 140) {
      alert('Your tweet is longer than 140 characters.');
    } else {
      $.ajax({
        method: 'POST',
        url: '/tweets/',
        data: $( this ).serialize(),
        success: () => {
          this.reset();
          loadTweets();
        }
      })
    }

    

  })

});
