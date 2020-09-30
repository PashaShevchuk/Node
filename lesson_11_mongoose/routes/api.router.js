const { Router } = require('express');

const { carRouter, userRouter, authRouter, user1Router } = require('../routes');

const apiRouter = Router();


apiRouter.use('/cars', carRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/users1', user1Router);
apiRouter.use('/auth', authRouter);

module.exports = apiRouter;
