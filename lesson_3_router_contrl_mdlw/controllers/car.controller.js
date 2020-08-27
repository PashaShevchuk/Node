const {carService} = require('../services');

module.exports = {
    getAllCars: (req, res) => {
        const cars = carService.getAll();
        res.render('cars', {cars});
    },
    getCarById: 'car by id',
    createCar: 'create',
    updateCar: 'update',
    deleteCar: 'delete',
};
