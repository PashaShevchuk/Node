let cars = [
    {id: 1, producer: "subaru", model: "wrx", year: 2010},
    {id: 2, producer: "porsche", model: "911", year: 2020},
    {id: 3, producer: "bmw", model: "315", year: 2014},
    {id: 4, producer: "audi", model: "a4", year: 2016},
    {id: 5, producer: "mercedes", model: "e63", year: 2017},
    {id: 6, producer: "lada", model: "2101", year: 1989},
];
//______________________________________________________________________________________________________________________

module.exports = {
    getAll: () => cars,

    getById: (id) => {
        const car = cars.find(car => car.id === id);
        return (car) ? car : {err: `Car with id ${id} not found`};
    },

    create: (data) => {
        const carsId = cars.map(car => car.id);
        let i = 1;
        while (carsId.includes(i)) i++; // to find the next smallest id
        const createdCar = {id: i, producer: data.producer, model: data.model, year: data.year};
        cars.push(createdCar);
        return createdCar;
    },

    update: (id, data) => {
        const car = cars.find(car => car.id === id);
        if (car) {
            const index = cars.findIndex(car => car.id === id);
            const updatedCar = {id: id, producer: data.producer, model: data.model, year: data.year};
            cars.splice(index, 1, updatedCar);
            return cars;
        } else {
            return {err: `Unable to update car with id ${id}, because it was not found`};
        }
    },

    delete: (id) => {
        const car = cars.find(car => car.id === id);
        if (car) {
            const index = cars.findIndex(car => car.id === id);
            cars.splice(index, 1);
            return cars;
        } else {
            return {err: `Unable to delete car with id ${id}, because it was not found`};
        }
    },
};
