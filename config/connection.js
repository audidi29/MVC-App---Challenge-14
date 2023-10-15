const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME || 'mvcapp_db',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || 'changeme',
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3002
    }
  );
}

module.exports = sequelize;
