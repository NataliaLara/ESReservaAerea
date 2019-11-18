var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'natalia',
    database: 'reservaaerea'
});
module.exports = connection;