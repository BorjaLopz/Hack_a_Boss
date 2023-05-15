"use strict";

const getDB = require("./db"); //Funcion que hemos creado en db.js

//Escribe a partir de aquí el código solicitado

async function main() {
  let connection;
  try {
    //Creamos conexion
    connection = await getDB();
    console.log("Conexion establecida"); //Log para nosotros comprobar que todo ha salido bien

    // Creamos la base de datos. Ya aparece en mysql workbench
    await connection.query("CREATE DATABASE IF NOT EXISTS web");
    await connection.query("USE web");
    console.log("Base de datos creada!"); //Log para nosotros para comprobar que todo ha salido bien

    //BORRANDO TABLAS

    await connection.query("DROP TABLE IF EXISTS likes");
    await connection.query("DROP TABLE IF EXISTS photos");
    await connection.query("DROP TABLE IF EXISTS users");

    //CREANDO TABLAS
    await connection.query(
      `CREATE TABLE users(
        id INT AUTO_INCREMENT PRIMARY KEY, 
        email VARCHAR(100) NOT NULL UNIQUE, 
        name VARCHAR(255) NOT NULL, 
        registration_date DATETIME DEFAULT CURRENT_TIMESTAMP, 
        active BOOLEAN DEFAULT FALSE
      );`
    );
    console.log("Creada tabla users!");

    await connection.query(
      `CREATE TABLE photos(
        id INT AUTO_INCREMENT PRIMARY KEY, 
        user_id INT NOT NULL, 
        photo_file_name VARCHAR(255) NOT NULL UNIQUE, 
        creation_time DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
      );`
    );
    console.log("Creando tabla photos!");

    await connection.query(
      `CREATE TABLE likes(
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        photo_id INT NOT NULL, 
        creation_time DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (photo_id) REFERENCES users (id) ON DELETE CASCADE
      )`
    );

    console.log("Creando tabla likes");
  } catch (e) {
    console.log("Hubo un erro: " + e.message);
  } finally {
    if(connection){
      connection.release(); //Cerramos conexion
      console.log("Cerrando conexion!");

      process.exit(0);
    }
  }
}

main();
