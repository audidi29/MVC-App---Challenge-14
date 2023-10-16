const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3401;
const mysql = require('mysql2');
const path = require('path');
const postData = require('./seeds/postData.json');


// Connect to database
const db =mysql.createConnection( 
  { host : 'localhost',
  //MySQL username,
  user: 'root',
  //MySQL password
  password: 'coupleV1@',
  database: 'mvcapp_db',
}
);

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

/// Define a route for the homepage
app.get('/', (req, res) => {
  // Pass the postData to the template for rendering
  res.render('homepage', { posts: postData });
});

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Your routes and other middleware go here...
app.get('/', (req, res) => {
  res.render('homepage'); // Assuming "home.handlebars" exists in the "views" directory
});

// Middleware to parse JSON request bodies
app.use(bodyParser.json());


app.post('/divide', (req, res) => {
  try {
    // Code that might throw an error
    const { dividend, divisor } = req.body;

    if (divisor === 0) {
      throw new Error('Division by zero is not allowed.');
    }

    const result = dividend / divisor;

    // Send the result back to the client
    res.json({ result });
  } catch (error) {
    // Handle the error
    console.error('An error occurred:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
