const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const UserRepository = require('./repository/user')

const { secure, hashPassword } = require('./middlewares/auth');
const { registerController, loginController, getUserController } = require('./controllers/user');

require('dotenv').config()
const app = new express();

let connection;

app.use(bodyParser.json());

app.use((req, res, next) => {
    const userRepository = new UserRepository(connection);
    req.userRepository = userRepository;
    next()
})


app.post('/user/register',hashPassword,registerController);

app.post('/user/login', loginController);

app.get('/user',secure,getUserController)

app.listen(process.env.APP_PORT, async () => {
    try {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            database: process.env.DB_DATABASE
        });
    } catch(e) {
        console.log(e)
    }
    console.log(`server listen to port ${process.env.APP_PORT}`)
})