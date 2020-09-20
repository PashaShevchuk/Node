const { Router } = require('express');

const {
  authController: { login, refreshToken }
} = require('../controllers');
const {
  userMiddleware: { checkIsUserPresent, checkHashUserPassword },
  tokenMiddleware: { checkRefreshToken }
} = require('../middlewares');

const authRouter = Router();


authRouter.post('/', checkIsUserPresent, checkHashUserPassword, login);
authRouter.post('/refresh', checkRefreshToken, refreshToken);
authRouter.post('/logout', checkRefreshToken, refreshToken);

module.exports = authRouter;
