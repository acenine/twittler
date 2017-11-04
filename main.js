

$(document).ready(function(){

    var index = 0;
    while(index < streams.home.length){
          
        var tweet = streams.home[index];
        addToFeed(tweet)
        index += 1;
    }


    function addToFeed(tweet) {
        var $tweetBox = $('<li class="tweetBox"></li>');
        var $tweetBody = $('<p></p>');
        var $username = $('<a href="#" class="username"></a>');
        $username.text(tweet.user).addClass(tweet.user);
        var $timestamp = $('<p class="timestamp"></p>');
        $timestamp.text("Created: " + tweet.created_at);
        $tweetBody.text('@').append($username).append( ': ' + tweet.message);
        $tweetBox.append($tweetBody);
        $tweetBox.append($timestamp);
    // might need to chage incoming later for adding user tweets
        $('.feed>.incoming').find("h3").after($tweetBox);

    
    }

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