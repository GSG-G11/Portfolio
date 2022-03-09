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

let sslValue = '';
if (dbUrl === 'postgres://hvcaapnyhbvvnn:517a93176381f4b727f5afac243b2def76a6bb4af5d6310b788dae996c123197@ec2-54-146-84-101.compute-1.amazonaws.com:5432/d5hq46dlcrjai9') sslValue = { rejectUnauthorized: false };
else sslValue = false;

const connection = new Pool({
  connectionString: dbUrl,
  ssl: sslValue,
});

module.exports = connection;
