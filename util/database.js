const mysql = require("mysql2");

pool = mysql.createPool({host: 'localhost', user: 'root', database: 'projectdb', password: 'VancouveR420'});
module.exports = pool.promise();