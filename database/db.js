var mysql = require('mysql2');
var dotenv = require('dotenv');
const path = require('path');
const { log } = require('console');

dotenv.config(path.join(__dirname,'.env'));
var conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE
});

conn.connect((err)=>{
    if (err) {
        console.log(err)
    } else {
        console.log('Conexion exitosa a la base de datos ' + process.env.DATABASE);
    }
});

module.exports = conn;