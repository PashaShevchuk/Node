// Вам потрібно реалізувати CRUD для машинок. Як базу беремо або масив, або файл.
// Необхідно:
// взяти всі машинки
// взяти одину машинку
// створити машинку
// оновити машинку
// видалити машинку
//______________________________________________________________________________________________________________________
const express = require('express');
const app = express();
const expressHandlebars = require('express-handlebars');
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHandlebars({
    defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));
//______________________________________________________________________________________________________________________

const {carRouter} = require('./routes');

app.use('/', carRouter);
app.use('/cars', carRouter);


//______________________________________________________________________________________________________________________

app.listen(5000, (err) => {
    if (err) console.log(err);
    console.log('Server listening on 5000');
});
