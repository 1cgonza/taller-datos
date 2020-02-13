const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: '..:: API Twitter y sockets ::..',
    description: '',
    poster: ''
  });
});

module.exports = router;
