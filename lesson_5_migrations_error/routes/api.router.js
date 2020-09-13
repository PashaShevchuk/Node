const {Router} = require('express');
const {carRouter} = require('../routes');
const apiRouter = Router();

apiRouter.use('/cars', carRouter);

module.exports = apiRouter;
