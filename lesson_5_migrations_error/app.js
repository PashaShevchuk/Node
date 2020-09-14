const express = require('express');
const sequelize = require('./config');
const apiRouter = require('./routes/api.router');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', apiRouter);

sequelize
  .sync({alter: true})
  .then(() => {
    app.listen(5000, (err) => {
      if (err) console.log(err);
      console.log('Server listening on 5000');
    });
  })
  .catch(reason => {
    console.log(reason);
  });
