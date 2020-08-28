const {Router} = require('express');
const carRouter = Router();
const {carMiddleware} = require('../middlewares');
const {carController} = require('../controllers');

carRouter.get('/', carController.getAllCars);                                     // взяти всі машинки
carRouter.get('/:id', carController.getCarById);                                  // взяти одину машинку
carRouter.post('/', carMiddleware.checkCarValidity, carController.createCar);     // створити машинку
carRouter.patch('/:id', carMiddleware.checkCarValidity, carController.updateCar); // оновити машинку
carRouter.delete('/:id', carController.deleteCar);                                // видалити машинку

module.exports = carRouter;
