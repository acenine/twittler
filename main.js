

$(document).ready(function(){

    var index = 0;
    while(index < streams.home.length){
          
        var tweet = streams.home[index];
        addTweet(tweet, 'feed');
        index += 1;
    }

/*
    var streamSpeed = setInterval(streamFeed, 1500);

    function streamFeed() {
        var numPosted = $('.feed>.tweetBox').length;
        if (numPosted < streams.home.length) {
            var i = numPosted;
            while (i < streams.home.length) {
                var tweet = streams.home[i];
                addTweet(tweet, "feed");
                i += 1;
            }
        }
    }
*/

    function makeTweetBox(tweet) {
        var $tweetBox = $('<li class="tweetBox"></li>');
        var $tweetBody = $('<p></p>');
        var $username = $('<a href="#" class="username"></a>');
        $username.text(tweet.user).addClass(tweet.user);
        var $timestamp = $('<p class="timestamp"></p>');
        $timestamp.text("Created: " + tweet.created_at);
        $tweetBody.text('@').append($username).append( ': ' + tweet.message);
        $tweetBox.append($tweetBody);
        $tweetBox.append($timestamp);
        return $tweetBox;
    // might need to chage incoming later for adding user tweets
        //$('.feed>.incoming').find("h3").after($tweetBox);

    
    }

    function addTweet(tweet, whereTo) {

        $('.' + whereTo + '>ul').prepend(makeTweetBox(tweet));
    }
/*
    function addToTimeline(tweet) {
        var $tweetBox = makeTweetBox(tweet);
        $('.timeline>ul').prepend(makeTweetBox(tweet));

    }
*/

// username is clicked
// display the timeline aside
// username tweets are shown earliest at top
$("#hideTimeline").click(function(){
        $(".timeline").hide();
        $('.timeline>ul').children().remove();
});

$(".username").click(function(){
    $('.timeline ul').children().remove();
    $('.timeline').show();
    var user = $(this).text();
    $('.timeline h3').text('').append(user).append("'s timeline:");
    var userTweets = streams.users[user];
    for (var i = 0; i < userTweets.length; i++) {
        addTweet(userTweets[i], "timeline");
    }

/*
    var stream = setInterval(streamTimeline, 5000);

    function streamTimeline() {
        var numPosted = $('.timeline>.tweetBox').length;
        if (numPosted < userTweets.length) {
            var i = numPosted;
            while (i < userTweets.length) {
                var tweet = userTweets[i];
                addTweet(tweet, "timeline");
                i += 1;
            }
        }
    }
*/
});


// Show the user new tweets


// Display the timestamps of when the tweets were created.


// Design your interface so that you want to look at and use the product you're making.


// Allow the user to click on a username to see that user's timeline.





/*

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
*/

    // after entering in the user name, that input should go away and the input for writing new tweets should appear
    
/*

    $(".login").submit(function() {
        var userName = document.getElementById("username").value;

        $('#userInput').children().remove();
        $('#userInput').append($form);

    });


    function Tweet(user, message){

        var tweet = {};
        tweet.user = user;
        tweet.message = message;
        tweet.created_at = new Date();
    }



    
        var $myMessage = $('<textarea id="myTweet" rows="10" cols="70"></textarea>');
        var $submit = $('<input type="submit" value="Submit">');

        var $form = $('<form>Enter new tweet here: </form>');
        $form.append($myMessage).append($submit);
*/



      });