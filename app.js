const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')

const app = express();

// Middlewares

// Import Routers

const postRouter = require('./routers/posts')

app.use('/posts', postRouter)

// Routes
app.get('/', (req, res) => {
    res.send('Hello world')
})

// Connect DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to db'))

// Server listen
app.listen(3000)