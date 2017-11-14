

$(document).ready(function(){
    stream()
    function stream(){
        setInterval(function(){
            var index = 0;
            while(index < streams.home.length){
          
                var tweet = streams.home[index];
                addToFeed(tweet, 'feed');
                index += 1;
            }
        }, 1000);
    };
/*
    $('.feed .refresh').click(function(){
        stream();
*/
    //var here = $(this).parent().attr('class');
   /* var index = 0;
    while(index < streams.home.length){
          
        var tweet = streams.home[index];
        addTweet(tweet, 'feed');
        index += 1;
    }*/

    window.visitor;
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

    
    };

    function addToFeed(tweet, whereTo) {

        $('.' + whereTo + '>ul').prepend(makeTweetBox(tweet));
    };

    $(document).on('click', '.username', function (event) { //shows timeline when you click on the username
        event.preventDefault();
        $('.timeline ul').children().remove();
        $('.timeline').show();
        var user = $(this).text();
        $('.timeline h3').text('').append(user).append("'s timeline:");
        var userTweets = streams.users[user];
        for (var i = 0; i < userTweets.length; i++) {
            addToFeed(userTweets[i], "timeline");
        }
    });

    $('#login').submit(function(event) { //when you enter your username you can send tweets as that user
        event.preventDefault();
        user = $("#username").val();
        addUser(user);
        var $welcome = $("<h3 class='welcome'></h3>");
        $welcome.text("Welcome ").append(user).append("! Add new twit below: ");
        $("header").prepend($welcome);
        $(this).hide();
        $('.tweetInput').show();
        $('#logout').show();
    });

    $('#logout').click(function(event) { // add logout button functionality
        event.preventDefault();
        $('.welcome').remove();
        $('.tweetInput').hide();
        $('#login').show();
        $(this).hide();
    });

    $('#tweetInput').submit(function(event){
        event.preventDefault();
        var message = $(this).find('.myTweet').val();
        writeTweet(message);
    });
    function addUser(username) {
        visitor = username; 
        if (!userInDatabase(username)) {
            streams.users[username] = [];
        }
    }
    function userInDatabase(username) {
        if (users.includes(username)) {
            return true;
        }
        return false;
    };
/*
    var writeTweet = function(message){
        var tweet = {};
        tweet.user = visitor;
        tweet.message = message;
        tweet.created_at = new Date();
        streams.home.push(tweet);

    };

var addTweet = function(newTweet){
  var username = newTweet.user;
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
 
};
 */
/*
    function addToTimeline(tweet) { 
        var $tweetBox = makeTweetBox(tweet);
        $('.timeline>ul').prepend(makeTweetBox(tweet));

    }
*/


    $("#hideTimeline").click(function(){
        $(".timeline").hide();
        $('.timeline>ul').children().remove();
    });
});


// Show the user new tweets


// Display the timestamps of when the tweets were created.


// Design your interface so that you want to look at and use the product you're making.


// Allow the user to click on a username to see that user's timeline.

// username is clicked
// display the timeline aside
// username tweets are shown earliest at top



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



     // });