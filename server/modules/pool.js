
const pg = require('pg');
let pool;

if (process.env.REACT_APP_DATABASE_URL) {
    pool = new pg.Pool({
        connectionString: process.env.REACT_APP_DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
}

else {
    pool = new pg.Pool({
        host: 'localhost',
        port: 5432,
        database: 'movement_phraser',   
    });
}

module.exports = pool;
