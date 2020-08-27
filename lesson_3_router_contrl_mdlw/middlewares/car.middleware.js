module.exports = {
    testMDLW: (req, res, next) => {
        console.log('test middleware working');
        next();
    }
};
