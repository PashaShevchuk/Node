const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = require('../config/words-for-db.config');


module.exports = () => {
  const access_token = jwt.sign({}, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  const refresh_token = jwt.sign({}, REFRESH_TOKEN_SECRET, { expiresIn: '1d' });

  return {
    access_token,
    refresh_token
  }
}
