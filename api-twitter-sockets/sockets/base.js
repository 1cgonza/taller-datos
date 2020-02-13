const terms = 'dog';

/**
 * The whispers.json file contains all the api keys, tokens, etc.
 * If you want to run this on your machine, get your keys from the Twitter API
 * Then fill the whispers.json file with your keys.
 **/
const whispers = require('../whispers.json');

/*==========================================
=            SETUP DEPENDENCIES            =
==========================================*/
/**
 * Sentiment Package: https://github.com/thisandagain/sentiment
 * More information about the underlying study that runs in the sentiment analysis:
 * http://neuro.imm.dtu.dk/wiki/AFINN
 **/
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

/**
 * Twitter Package: https://github.com/ttezel/twit
 * If the whisers.json exists, then all keys are filled from that file.
 * But you can also fill the keys and tokens directly in the Twit class here.
 **/
const Twit = require('twit');
const T = new Twit({
  consumer_key: whispers.twitter.consumerKey,
  consumer_secret: whispers.twitter.consumerSecret,
  access_token: whispers.twitter.accessToken,
  access_token_secret: whispers.twitter.accessTokenSecret
});
/*-----  End of SETUP DEPENDENCIES  ------*/

/*============================================
=            SETUP TWITTER STREAM            =
============================================*/
let stream;

/*-----  End of SETUP TWITTER STREAM  ------*/

function eternasHome(io) {
  let numGuests = 0;
  let streaming = false;

  /**
   * When a client opens the site, the socket will attempt the handshake between the client and server.
   * If the handshake is successful, socket.io emits the 'connection' message to the server.
   **/
  io.on('connection', function(socket) {
    knock_knock_on_the_door();

    socket.emit('tracking', terms);

    socket.on('disconnect', function() {
      goodbyeFriend();
    });
  });

  function knock_knock_on_the_door() {
    numGuests++;

    if (numGuests > 0 && streaming === false) {
      streaming = true;
      stream = T.stream('statuses/filter', { track: terms });
      openFaucet();
    }
  }

  function goodbyeFriend() {
    numGuests--;

    if (numGuests === 0) {
      streaming = false;
      stream.stop();
    }
  }

  function openFaucet() {
    stream.on('tweet', function(tweet) {
      broadcastMsg(tweet);
    });
  }

  function broadcastMsg(tweet) {
    const sentimentResult = sentiment.analyze(tweet.text);
    let location, filteredTweet, data;

    if (!tweet.place) {
      if (!tweet.user.time_zone) {
        // No location information on the tweet
        location = '?';
      } else {
        location = tweet.user.time_zone;
      }
    } else {
      location = tweet.place.full_name;
    }

    filteredTweet = {
      location: location,
      text: tweet.text,
      timestamp: tweet.timestamp_ms,
      sentiment: {
        score: sentimentResult.score,
        comparative: sentimentResult.comparative
      },
      user: tweet.user.name
    };

    data = JSON.stringify(filteredTweet);

    io.emit('new tweet', data);
  }
}

module.exports = eternasHome;
