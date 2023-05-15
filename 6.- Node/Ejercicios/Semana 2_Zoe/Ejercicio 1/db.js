'use strict';

const mysql = require('mysql2/promise');


let pool;

async function getDB() {
  if (!pool) {
    //LOCAL
    pool = mysql.createPool({
      connectionLimit: 10,
      host: "localhost",
      user: "demo",
      password: "password",
      timezone: "Z",
    });

    //CODING ROOMS
    // pool = mysql.createPool({
    //   connectionLimit: 10,
    //   host: "localhost",
    //   user: "admin",
    //   password: "Classroom",
    //   timezone: 'Z',
    // });
  }
  return await pool.getConnection();
}

module.exports = getDB;
