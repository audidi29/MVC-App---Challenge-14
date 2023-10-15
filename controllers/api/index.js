const express = require('express');
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const app = express();

process.on('uncaughtException', function (err) {
    console.log(err);
});

app.get('/', (req, res) => {
    try {
        // Your code logic here 
        res.json('Hello World!');
    } catch (error) {
        // Handle errors gracefully
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const port = 3001;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
