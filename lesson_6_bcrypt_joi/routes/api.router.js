const {Router} = require('express');
const {carRouter, userRouter} = require('../routes');
const apiRouter = Router();

apiRouter.use('/cars', carRouter);
apiRouter.use('/users', userRouter);

module.exports = apiRouter;
