
/* Haz scroll hasta abajo para escribir tu código*/

/* Preparación de la base de datos, no edites las siguientes líneas */
/*DROP DATABASE IF EXISTS bootcamp;
CREATE DATABASE bootcamp;*/
USE bootcamp;

/*
CREATE TABLE students (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    tlf INT UNSIGNED,
    dni CHAR(11) UNIQUE NOT NULL
);

CREATE TABLE addresses (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	country VARCHAR(100),
    zip_code CHAR(5),
    address VARCHAR(200),
    city VARCHAR(100),
    id_student INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_student) REFERENCES students (id)
);

INSERT INTO students (name, lastname, email, tlf, dni) VALUES 
('Irvin', 'Lethem', 'ilethem0@google.com.au', 993870144, '279948941-9'),
('Kylie', 'Mungan', 'kmungan1@howstuffworks.com', 497494899, '748551874-7'),
('Yul', 'Dibbert', 'ydibbert2@businesswire.com', 776631050, '215649413-4'),
('Tamra', 'Mc Gorley', 'tmcgorley3@studiopress.com', 921948685, '617064473-7'),
('Elmira', 'Imbrey', 'eimbrey4@cpanel.net', 304168000, '178988896-4');


INSERT INTO addresses (country, zip_code, address, city, id_student) VALUES 
('Indonesia', '83297', '98339 Loftsgordon Road', 'Babakanbandung', 1),
('Philippines', '44455', '74641 Dwight Avenue', 'Bilar', 2),
('Indonesia', '62965', '9510 Milwaukee Street', 'Sumberejo', 3),
('Norway', '54756', '8902 Doe Crossing Alley', 'Steinkjer', 4),
('United States', '51471', '8616 Stephen Hill', 'Charleston', 5);

/* Escribe a continuación el código SQL solicitado: */

/*seleccionar todos los datos de los estudiantes incluída toda la información de su dirección.*/

/*
SELECT *
FROM students INNER JOIN addresses
WHERE students.id = addresses.id_student;
*/

/*selecionar el nombre, apellidos y email de los estudiantes de Indonesia*/

SELECT name, lastname, email
FROM students INNER JOIN addresses
WHERE students.id = id_student AND country = "Indonesia";
