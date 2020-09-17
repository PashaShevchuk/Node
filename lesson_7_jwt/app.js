const express = require('express');
const sequelize = require('./dataBase');
const apiRouter = require('./routes/api.router');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', apiRouter);

app.use('*', (err, req, res, next) => {
  res
    .status(err.status || 404)
    .json({
      message: err.message || 'NOT FOUND',
      code: err.customCode || ''
    });
});

sequelize
  .sync()
  .then(() => {
    app.listen(5000, (err) => {
      if (err) console.log(err);
      console.log('Server listening on 5000');
    });
  })
  .catch(reason => {
    console.log(reason);
  });
