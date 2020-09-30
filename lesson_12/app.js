const express = require('express');
const mongoose = require('mongoose');

const apiRouter = require('./routes/api.router');

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(encodeURI('mongodb://localhost/auto_shop'), { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (args) => {
  console.log(args);
});


app.use('/api', apiRouter);


app.listen(5000, (err) => {
  if (err) console.log(err);

  console.log('Server listening on 5000');
});
