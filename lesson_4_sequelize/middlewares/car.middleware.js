module.exports = {
    checkCarValidity: (req, res, next) => {
        try {
            const car = req.body;
            if (!car.producer || !car.model || !car.year) {
                throw new Error('Please enter all required details');
            }
            if (+car.year < 1885 || +car.year > new Date().getFullYear()) { //Because the first car was built in 1885
                throw new Error('Please enter the correct year')
            }
            next();
        } catch (e) {
            return res.status(400).end(e.message);
        }
    }
};
