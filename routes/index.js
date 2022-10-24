var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../config');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sign', function (req, res, next) {
  var payload = req.body.payload;
  var options = req.body.options;
  if (!payload) payload = {};
  if (!options) options = {};

  // https://github.com/auth0/node-jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
  // handle payload
  /**
  payload = { name: 'John Doe', uid: 'a0d53af8-5ce1-4f6f-a904-111ba7e1d61a' };
  **/

  // handle payload
  /**
  options = { expiresIn: '2h' };
  **/
  var token = jwt.sign(payload, config.PRIVATE_KEY, options);
  res.send(token);
});

router.get('/verify', function (req, res, next) {
  var raw = req.header('authorization');
  if (!raw)
    return next({ status: 401, message: 'empty authorization in header' });
  if (!raw.startsWith('Bearer '))
    return next({
      status: 401,
      message: 'authrorization token must be bearer token',
    });
  var token = raw.split(' ')[1];

  jwt.verify(token, config.PRIVATE_KEY, function (err, decoded) {
    if (err) {
      // https://github.com/auth0/node-jsonwebtoken#errors--codes
      next({ message: `jwt verify failed - [${err.name}] ${err.message}` });
    }
    // handle decoded jwt
    /**
    console.log(decoded);
    **/
    res.json(decoded);
  });
});

module.exports = router;
