const jwt = require('jsonwebtoken');


module.exports = () => {
  const access_token = jwt.sign({}, 'secret', { expiresIn: '15m' });
  const refresh_token = jwt.sign({}, 'super', { expiresIn: '1d' });

  return {
    access_token,
    refresh_token
  }
}
