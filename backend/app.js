const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb+srv://daniel:' +
    process.env.MDB_PW +
    '@cluster0-a5t7w.mongodb.net/test?retryWrites=true',
    { useNewUrlParser: true }
)
.then(() => {
    console.log('MongoDB Connected!')
})
.catch(() => {
    console.log('Connection Failed!')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', express.static(path.join('backend/images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With,Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
});

const userRoutes = require('./routes/user');

// Routes
app.use('/api/user', userRoutes);

module.exports = app;