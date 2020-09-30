const { Router } = require('express');

const { userRouter } = require('../routes');

const apiRouter = Router();


apiRouter.use('/users', userRouter);


module.exports = apiRouter;
