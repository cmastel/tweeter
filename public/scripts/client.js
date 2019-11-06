/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}


 const createTweetElement = function(tweetOjbect) {
  const currentDate = new Date();
  const previousDate = currentDate - (10 * 1000)
  // const timeAgo = currentDate - previousDate;
  const elapsedTime = currentDate - tweetOjbect.created_at;
  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const years = days / 365;
  let timeAgo = 0;
  let time = '';
  if (years >= 1) {
    timeAgo = years;
    time = 'years';
  } else if (days >= 1) {
    timeAgo = days;
    time = 'days';
  } else if (hours >= 1) {
    timeAgo = hours;
    time = 'hours';
  } else if (minutes >= 1) {
    timeAgo = minutes;
    time = 'minutes'
  } else {
    timeAgo = seconds;
    time = 'seconds';
  }
  
  const markup = `
  <article class="tweets">
    <header>
      <div id="avatar">
        <img src="${tweetOjbect.user.avatars}">
      </div>
      <div id="name">${tweetOjbect.user.name}</div>
      <div id="username">${tweetOjbect.user.handle}</div>
    </header>
    <p>
      ${tweetOjbect.content.text}
    </p>
    <footer>
      ${Math.floor(timeAgo)} ${time} ago
      <div id="heart">
        <i class="fa fa-heart"></i>
      </div>
      <div id="retweet">
        <i class="fa fa-retweet"></i>
      </div>
      <div id="flag">
        <i class="fa fa-flag"></i>
      </div>
    </footer>
  </article>
  `
  return markup;
 }


 $(document).ready(function() {


 const $tweet = createTweetElement(tweetData);
 console.log($tweet);
 $('#tweets-container').append($tweet);


});