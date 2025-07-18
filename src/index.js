// В якому порядку написано, в такій послідовності працюють обробники

import express from 'express';
import cors from 'cors';
// import PinoHttp from 'pino-http';
import { movies } from './db/movies.js';

const app = express();

// middleware для логування

// const logger = PinoHttp({
//     transport: {
//         target: 'pino-pretty',
//     }
// });

// app.use(logger);

// v1 Обробник CORS, дозволяє запити кросдоменні (бібліотека)
app.use(cors())

app.use((req, res, next) => {
    // Якщо першим аргументом передати рядок з адресою, то ця middleware буде
    // працювати тільки з цією группою адрес, якщо колбек, то для всіх адрес

    // Також присутній параметр next, щоб продовжити шукати далі обробника запиту

    console.log('Common middleware');

    // v2 Обробник CORS, дозволяє запити кросдоменні, нативний спосіб
    // res.header("Access-Control-Allow-Origin", "*"); // або конкретний домен
    // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})

app.get('/', (request, response) => {
    response.send('<h1>Main Page</h1>')
});

app.get('/movies', (req, res) => {
    // res.send(movies) - не завжди може правильно форматувати json, наприклад якщо передати null то нічого не прийде
    // res.json(movies) - враховує додаткові налаштування json, такі як app.set('json spaces', 90)

    // Для JSON краще використовувати res.json(). 
    // Можна передавати відразу звичаний JS, він автоматично переформатує в JSON

    res.json(movies);
});

app.get('/contacts', (request, response) => {
    // Повернення HTML розмітки
    // console.log('request', request) - інформація про запит

    return response.send(`
        <style>
            body {
                background: #ededed
            }
        </style>
        <div>
            <h1>Contacts Page</h1>
            <p>City: Kyiv</p
        </div>
    `)
});

// middleware для 404
app.use((req, res) => {
    res.status(404).json({
        message: `${req.url} not found`
    })
})

app.listen(3000, () => console.log('Server running on 3000 port'))