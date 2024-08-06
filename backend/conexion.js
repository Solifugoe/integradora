const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10, // Set the maximum number of connections in the pool
    host: 'oaxacapower.org',
    user: 'u744130986_theraglow',
    password: 'KaizoIntegradora2024',
    database: 'u744130986_theraglow'
});

// Export the pool to use it in your routes
module.exports = pool;
