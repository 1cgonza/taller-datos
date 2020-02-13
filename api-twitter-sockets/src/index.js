import './scss/styles.scss';
import io from 'socket.io-client';

// Init sockets
const socket = io();
socket.once('disconnect', res => console.log(res));
socket.once('connect', init);
socket.once('tracking', showTerms);

// elementos de HTML
const score = document.getElementById('score');
const msg = document.getElementById('msg');
const time = document.getElementById('time');
const user = document.getElementById('user');
const location = document.getElementById('location');

function showTerms(res) {
  const contenedor = document.getElementById('terms');
  const terms = res.split(',');

  terms.forEach(name => {
    const link = document.createElement('a');
    const term = document.createTextNode(name);
    link.appendChild(term);
    link.href = `https://twitter.com/search?q=${name}`;
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener');
    contenedor.appendChild(link);
  });
}

function init() {
  socket.on('new tweet', newTweet);
}

function newTweet(tweet) {
  tweet = JSON.parse(tweet);
  score.innerText = tweet.sentiment.score;
  msg.innerText = tweet.text;
  time.innerText = new Date(Number(tweet.timestamp));
  user.innerText = tweet.user;
  location.innerText = tweet.location;
}
