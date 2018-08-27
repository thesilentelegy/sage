require('dotenv').config();

module.exports = {
  development: {
    username: 'admin',
    password: 'admin',
    database: 'app_db_dev',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'admin',
    password: 'admin',
    database: 'app_db_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql'
  }
};