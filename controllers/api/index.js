// const express = require('express');
// const router = require('express').Router();
// const userRoutes = require('./userRoutes');
// const postRoutes = require('./postRoutes');
// const app = express();

// process.on('uncaughtException', function (err) {
//     console.log(err);
// });

// app.get('/', (req, res) => {
//     try {
//         // Your code logic here 
//         res.json('Hello World!');
//     } catch (error) {
//         // Handle errors gracefully
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// const port = 3401;
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

const express = require('express');
const app = express();
const port = 3401;

// Import your data fetching functions or modules
const { fetchData } = require('./data-fetching');

app.get('/', async (req, res) => {
    try {
        // Fetch data from your database or wherever you store it
        const posts = await fetchData(); // Assume fetchData returns an array of posts
        
        // Render your template (assuming you're using Handlebars)
        res.render('homepage', { posts });
    } catch (error) {
        // Handle errors gracefully
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
