const { Router } = require('express');

const apiRouter = Router();

apiRouter.use('/users', userRouter);

module.exports = apiRouter;
