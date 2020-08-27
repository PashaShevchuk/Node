const {Router} = require('express');
const carRouter = Router();
const {carController} = require('../controllers');
const {carMDLW} = require('../middlewares');

carRouter.get('/', carMDLW.testMDLW, carController.getAllCars);

module.exports = carRouter;
