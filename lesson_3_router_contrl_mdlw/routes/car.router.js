const {Router} = require('express');
const carRouter = Router();
const {carController} = require('../controllers');
const {carMDLW} = require('../middlewares');

carRouter.get('/', carMDLW.testMDLW, carController.getAllCars); // взяти всі машинки
carRouter.get('/:id', carController.getCarById);                // взяти одину машинку
carRouter.post('/', carController.createCar);                   // створити машинку
carRouter.patch('/:id', carController.updateCar);               // оновити машинку
carRouter.delete('/:id', carController.deleteCar);              // видалити машинку

module.exports = carRouter;
