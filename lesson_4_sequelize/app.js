const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const sequelize = require('./configs');

const apiRouter = require('./routes/api.router');

app.use('/api', apiRouter);

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
