

$(document).ready(function(){

    var index = 0;
    while(index < streams.home.length){
          
        var tweet = streams.home[index];
        addToFeed(tweet, "incoming")
        index += 1;
    }

    function createTweet(tweet) {
        var date = new Date();
        var $tweet = $('<li class="tweet"></li>');
        $tweet.text('@' + tweet.user + ': ' + tweet.message);
        var $timestamp = $('<p class="timestamp"></p>')
        $timestamp.text("Created: " + date.getTime());
        $tweet.append($timestamp);
        return $tweet;
    }
    function addToFeed(tweet, tweetType) {
        $('.feed>.'+tweetType).find("h3").after(createTweet(tweet));
        }

    // after entering in the user name, that input should go away and the input for writing new tweets should appear

      });