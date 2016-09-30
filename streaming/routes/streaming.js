var express = require('express');
var router = express.Router();
var io = require('socket.io')(server);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('streaming', {title: 'streaming'});
});

module.exports = router;
