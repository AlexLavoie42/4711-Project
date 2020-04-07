const mysql = require("mysql2");

pool = mysql.createPool({host: 'remotemysql.com:3306', user: 'BkwEmFKpeJ', database: 'BkwEmFKpeJ', password: 'iKzvTOVXs7'});
module.exports = pool.promise();