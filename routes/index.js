var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../config');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sign', function (req, res, next) {
  var payload = req.body.payload;
  var options = req.body.options;
  if (!payload) payload = {};
  if (!options) options = {};
  var token = jwt.sign(payload, config.PRIVATE_KEY, options);
  res.send(token);
});

module.exports = router;
