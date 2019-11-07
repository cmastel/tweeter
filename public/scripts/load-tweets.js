const loadTweets = function(last=false) {
  if (last) {
    $.ajax({
      method: 'GET',
      url: '/tweets/',
      dataType: 'json',
      success: (data) => {
        const lastKey = Object.keys(data).reverse()[0];
        const tweet = data[lastKey];
        const $tweet = createTweetElement(tweet);
        $('#tweets-container').prepend($tweet);
        
      }
    })
  } else {
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
  
  
}