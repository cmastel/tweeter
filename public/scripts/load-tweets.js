  
const loadTweets = function() {
  $.ajax({
    method: 'GET',
    url: '/tweets/',
    dataType: 'json',
    success: (data) => {
      for (let tweet of data) {
        const $tweet = createTweetElement(tweet);
        $('#tweets-container').prepend($tweet);
      }
    }
  })
}