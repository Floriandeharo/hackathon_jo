const mysql = require('mysql2');
const config = require('./config');

const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  port: config.port,
});

const promisePool = pool.promise();

module.exports = {
  query: (sql, params) => promisePool.query(sql, params),
};
