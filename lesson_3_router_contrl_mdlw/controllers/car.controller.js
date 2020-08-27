const {carService} = require('../services');

module.exports = {
    getAllCars: (req, res) => {
        const cars = carService.getAll();
        res.render('cars', {cars});
    },
    getCarById: (req, res) => {
        const car = carService.getById(2);
        res.render();
    },
    createCar: 'create',
    updateCar: 'update',
    deleteCar: 'delete',
};
