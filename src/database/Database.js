const mysql = require('mysql');
const config = require('../config');

let pool = null;

function initialize() {
    if (!pool) {
        pool = mysql.createPool(config.dev.database);
    }
}

class Database {
    static getConnectionPool() {
        if (!pool) {
            initialize();
        }
        return pool;
    }
}

module.exports = Database;