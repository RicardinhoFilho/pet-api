const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tatu1964',
    database: 'agenda_petshop'
});




module.exports = conexao;