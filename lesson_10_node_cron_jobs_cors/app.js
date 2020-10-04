const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./dataBase');
const apiRouter = require('./routes/api.router');
const croneRun = require('./crone-jobs');
const { WHITE_LIST } = require('./configs/config');

const app = express();

if (process.env.ENV === 'DEV') {
  app.use(cors());

} else {
  app.use(cors({
    origin: (origin, callback) => {
      if (WHITE_LIST.split(';').includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }));
}

app.use(fileUpload({}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/api', apiRouter);

// error
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
      if (err) {
        console.log(err);
      }

      croneRun(); // node-crone jobs
      console.log('Server listening on 5000');
    });
  })
  .catch(reason => {
    console.log(reason);
  });


// promise error
process.on('unhandledRejection', reason => {
  console.log(reason);
  process.exit(0);
});
