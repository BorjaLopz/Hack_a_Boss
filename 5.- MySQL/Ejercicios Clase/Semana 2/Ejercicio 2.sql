
/* Haz scroll hasta abajo para escribir tu código*/

/* Preparación de la base de datos, no edites las siguientes líneas */
/*
DROP DATABASE IF EXISTS bootcamp;
CREATE DATABASE bootcamp;
USE bootcamp;

CREATE TABLE students (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    tlf INT UNSIGNED,
    dni CHAR(11) UNIQUE NOT NULL
);

INSERT INTO students (name, lastname, email, tlf, dni) VALUES 
('Irvin', 'Lethem', 'ilethem0@google.com.au', 993870144, '279948941-9'),
('Kylie', 'Mungan', 'kmungan1@howstuffworks.com', 497494899, '748551874-7'),
('Yul', 'Dibbert', 'ydibbert2@businesswire.com', 776631050, '215649413-4'),
('Tamra', 'Mc Gorley', 'tmcgorley3@studiopress.com', 921948685, '617064473-7'),
('Elmira', 'Imbrey', 'eimbrey4@cpanel.net', 304168000, '178988896-4');

/* Escribe a continuación el código SQL solicitado: */

/*Modifica la tabla students (usando ALTER TABLE) para añadir una 
columna para su edad (age). A continuación rellena esa columna para los 
5 estudiantes que hay en la tabla con los valores que tu decidas.*/

/*
ALTER TABLE students
ADD COLUMN age VARCHAR(3) AFTER lastname; /* /*MIN - 0 (0); MAX - 120 (3)*/

UPDATE students
SET age = "15" WHERE id = 1;

UPDATE students
SET age = "20" WHERE id = 2;

UPDATE students
SET age = "21" WHERE id = 3;

UPDATE students
SET age = "23" WHERE id = 4; 

UPDATE students
SET age = "24" WHERE id = 5;
