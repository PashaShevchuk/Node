//     Вам потрібно реалізувати мінімум 3 строрінки.
// 1) Реєстрація
// 2) Логінація.
// 3) Список всіх юзерів.
//     Створити масив юзерів, який буде виступати в ролі бази данних. При реєстрації юзер вводин логін та пороль і ви його
// данні пушите в масив юзерів. При логінації юзер так само ввоить мейл та пароль і вам необхідно знайти його мейлик в
// масиві юзерів та якщо такий мейлик з таким паролем є, то привіти юзера на платформі. В інакшому випадку сказати, що
// необхідно реєструватись. І відображення всіх юзерів це відповідно просто виведення списку вісх юзерів. При реєстрації
// мейли не можуть повторюватись.

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

let usersArr = [
    {login: 'bob', password: '2020bob'},
    {login: 'mary', password: '8mary8'},
    {login: 'ava', password: '123456789'},
];

app.get('/', (req, res) => {
    res.render('main');
});

app.post('/login', (req, res) => {
    res.render('login');
});

app.post('/register', (req, res) => {
    res.render('register');
});

app.post('/users', (req, res) => {
    console.log(req.body);
    if (req.body.login) usersArr.push(req.body);
    res.render('users', {usersArr});
});


//______________________________________________________________________________________________________________________
app.listen(5000, (err) => {
    if (err) console.log(err);

    console.log('Server listening on 5000');
});
