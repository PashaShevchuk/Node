const {Router} = require('express');
const {carRouter, userRouter, authRouter} = require('../routes');
const apiRouter = Router();

apiRouter.use('/cars', carRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/auth', authRouter);

module.exports = apiRouter;
