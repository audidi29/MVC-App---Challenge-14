// // const path = require('path');
// // const express = require('express');
// // const session = require('express-session');
// // const exphbs = require('express-handlebars');
// // const routes = require('./controllers');
// // const helpers = require('./utils/helpers');

// // // Global middleware function
// // app.use((req, res, next) => {
// //   console.log('This middleware runs for every request.');
// //   next();
// // });


// // const sequelize = require('./config/connection');
// // const SequelizeStore = require('connect-session-sequelize')(session.Store);

// // const app = express();
// // const PORT = process.env.PORT || 3002;

// // // Set up Handlebars.js engine with custom helpers
// // const hbs = exphbs.create({ helpers });

// // const sess = {
// //   secret: 'Super secret secret',
// //   cookie: {
// //     maxAge: 300000,
// //     httpOnly: true,
// //     secure: false,
// //     sameSite: 'strict',
// //   },
// //   resave: false,
// //   saveUninitialized: true,
// //   store: new SequelizeStore({
// //     db: sequelize
// //   })
// // };

// // app.use(session(sess));

// // // Inform Express.js on which template engine to use
// // app.engine('handlebars', hbs.engine);
// // app.set('view engine', 'handlebars');

// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.static(path.join(__dirname, 'public')));

// // app.use(routes);

// // sequelize.sync({ force: false }).then(() => {
// //   app.listen(PORT, () => console.log('Now listening'));
// // });


// // const express = require('express');
// // const app = express();

// // // Global middleware function
// // app.use((req, res, next) => {
// //   console.log('This middleware runs for every request.');
// //   next();
// // });


// // // Define your routes here

// // const PORT = 3001;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });


// const express = require('express');
// const app = express();
// const handlebars = require('express-handlebars');
// const sequelize = require('./config/connection');
// const User = require('./models/User');
// const PORT = process.env.PORT || 3301; // Use the environment variable PORT, or default to 4001


// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Handlebars setup
// app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// // Global middleware function
// app.use((req, res, next) => {
//   console.log('This middleware runs for every request.');
//   next();
// });

// // Sequelize sync
// sequelize.sync()
//   .then(() => {
//     console.log('Database synced.');
//   })
//   .catch((err) => {
//     console.error('Error syncing database:', err);
//   });

// // Routes
// app.get('/', (req, res) => {
//   User.findAll()
//     .then(users => {
//       res.render('index', { users });
//     })
//     .catch(err => {
//       console.error('Error fetching users:', err);
//       res.status(500).send('Internal Server Error');
//     });
// });

// // const PORT = 4001;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);

//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3301;
const mysql = require('mysql2');
const path = require('path');


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

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Your routes and other middleware go here...
app.get('/', (req, res) => {
  res.render('homepage'); // Assuming "home.handlebars" exists in the "views" directory
});

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// // Set up Handlebars as the view engine
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// app.get('/', (req, res) => {
//   // Render the home.handlebars template
//   res.render('home', { message: 'Welcome to Handlebars Example!' });
// });

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
