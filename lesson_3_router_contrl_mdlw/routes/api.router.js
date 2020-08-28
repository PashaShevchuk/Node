const {Router} = require('express');
const apiRouter = Router();
const {carRouter} = require('../routes');

apiRouter.use('/cars', carRouter);

module.exports = apiRouter;
