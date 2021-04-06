const mysql = require('mysql'); 

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pet_api'
});




module.exports = conexao;