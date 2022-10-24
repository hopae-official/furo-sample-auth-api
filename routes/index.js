var express = require('express');
var router = express.Router();
const authUtil = require('../middlewares/auth');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/private', authUtil, function (req, res, next) {
  // authUtil 을 거쳐서 성공적으로 온 req에는 req.user가 들어있음
  console.log(req.user);
  res.json(req.user);
});

module.exports = router;
