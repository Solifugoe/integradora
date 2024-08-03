const mysql = require('mysql');

const mysqlConexion = mysql.createConnection({
    host: 'oaxacapower.org',
    user: 'u744130986_theraglow',
    password: 'KaizoIntegradora2024',
    database: 'u744130986_theraglow'
});

mysqlConexion.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('La base de datos está conectada.');
    }
});

module.exports = mysqlConexion;
