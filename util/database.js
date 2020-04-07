const mysql = require("mysql2");

pool = mysql.createPool({host: 'remotemysql.com', user: 'BkwEmFKpeJ', database: 'BkwEmFKpeJ', password: 'iKzvTOVXs7'});
module.exports = pool.promise();