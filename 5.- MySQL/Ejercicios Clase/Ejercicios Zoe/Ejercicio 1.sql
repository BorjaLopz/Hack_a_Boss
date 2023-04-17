CREATE DATABASE IF NOT EXISTS bootcamp_EjercicioZoe;

DROP TABLE IF EXISTS students;
USE bootcamp_EjercicioZoe;
####	EJERCICIO 1		###
CREATE TABLE IF NOT EXISTS students (
	id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(20), 
    last_name VARCHAR(20), 
    email VARCHAR(50), 
    phone_number VARCHAR(20), 
    DNI VARCHAR(15), 
    country VARCHAR(60), 
    zip_code INT, 
    address VARCHAR(150), 
    city VARCHAR(60)
);