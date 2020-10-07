const { Router } = require('express');

const {
  authController: { login, refreshToken, logout }
} = require('../controllers');
const {
  userMiddleware: { checkIsUserPresent, checkHashUserPassword },
  tokenMiddleware: { checkRefreshToken, checkAccessToken },
  checkTokenTypeMiddleware
} = require('../middlewares');

const authRouter = Router();


authRouter.post('/', checkIsUserPresent, checkHashUserPassword, login);
authRouter.post('/refresh', checkTokenTypeMiddleware('refresh'),checkRefreshToken, refreshToken);
authRouter.post('/logout', checkAccessToken, logout);

module.exports = authRouter;
