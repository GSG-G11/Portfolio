require('env2')('config.env');
const {
  Pool,
} = require('pg');

const {
  NODE_ENV,
  DATABASE_URL,
  TEST_DB_URL,
  DEV_DB_URL,
} = process.env;

let dbUrl = '';

switch (NODE_ENV) {
  case 'production':
    dbUrl = DATABASE_URL;
    break;
  case 'test':
    dbUrl = TEST_DB_URL;
    break;
  case 'development':
    dbUrl = DEV_DB_URL;
    break;

  default:
    throw new Error('NO DATABASE FOUND');
}

const connection = new Pool({
  connectionString: dbUrl,
  ssl: false,
});

module.exports = connection;
