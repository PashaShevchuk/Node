const {Router} = require('express');
const carRouter = Router();
const {carController} = require('../controllers');
const {carMDLW} = require('../middlewares');

carRouter.get('/', carMDLW.testMDLW, carController.getAllCars);

carRouter.get('/cars',carController.getAllCars);

module.exports = carRouter;
