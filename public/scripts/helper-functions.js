// timeAgo determines how long ago a tweet was written
// it returns an array with an integer for the amount of
// time, and a string indicating the time frame
const timeAgo = function(originalDate) {
  const currentDate = new Date();
  const elapsedTime = currentDate - originalDate;
  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const years = days / 365;
  let timeAgo = [];
  if (years >= 1) {
    timeAgo = [years, 'years'];
  } else if (days >= 1) {
    timeAgo = [days, 'days'];
  } else if (hours >= 1) {
    timeAgo = [hours, 'hours'];
  } else if (minutes >= 1) {
    timeAgo = [minutes, 'minutes'];
  } else {
    timeAgo = [seconds, 'seconds'];
 }
 return timeAgo;
}

// escape prevents cross-site scripting
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// createTweetElement provides the html to create a new tweet article
const createTweetElement = function(tweetOjbect) {
 const deltaTime = timeAgo(tweetOjbect.created_at)
 const markup = `
 <article class="tweets">
   <header>
     <div id="avatar">
       <img src="${tweetOjbect.user.avatars}">
     </div>
     <div id="name">${escape(tweetOjbect.user.name)}</div>
     <div id="username">${escape(tweetOjbect.user.handle)}</div>
   </header>
   <p>
     ${escape(tweetOjbect.content.text)}
   </p>
   <footer>
     ${Math.floor(deltaTime[0])} ${deltaTime[1]} ago
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

// loadTweets either loads all tweets, or just the most recent tweet if
// the optional paramter is set to true
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