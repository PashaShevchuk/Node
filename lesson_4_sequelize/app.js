const express = require('express');
const app = express();

const instance = require('./dataBase').getInstance();
instance.setModels();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//______________________________________________________________________________________________________________________
const apiRouter = require('./routes/api.router');

app.use('/api', apiRouter);

//______________________________________________________________________________________________________________________
app.listen(5000, (err) => {
    if (err) console.log(err);
    console.log('Server listening on 5000');
});
