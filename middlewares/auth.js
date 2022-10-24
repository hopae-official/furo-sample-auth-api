const jwt = require('jsonwebtoken');
const config = require('../config');

const authUtil = async (req, res, next) => {
  const raw = req.header('authorization');
  console.log(raw);
  if (!raw)
    return next({ status: 401, message: 'empty authorization in header' });
  if (!raw.startsWith('Bearer '))
    return next({
      status: 401,
      message: 'authrorization token must be bearer token',
    });
  // remove Bearer prefix
  const token = raw.split(' ')[1];

  jwt.verify(token, config.PRIVATE_KEY, function (err, decoded) {
    if (err) {
      // https://github.com/auth0/node-jsonwebtoken#errors--codes
      next({ message: `jwt verify failed - [${err.name}] ${err.message}` });
    }
    // handle decoded jwt
    // console.log(decoded);
    req.user = decoded;
    next();
  });
};

module.exports = authUtil;
