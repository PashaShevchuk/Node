const app = require('./app');
const sequelize = require('./configs');

sequelize.sync({alter: true}).then(() => {
    app.listen(5000, (err) => {
        if (err) console.log(err);
        console.log('Server listening on 5000');
    });
}).catch(reason => {
    console.log(reason);
});
