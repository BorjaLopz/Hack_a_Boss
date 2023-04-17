CREATE DATABASE IF NOT EXISTS bootcamp;
USE bootcamp;

/* pega a continuación el SQL necesario del ejercicio anterior */
CREATE TABLE IF NOT EXISTS students(
id int PRIMARY KEY AUTO_INCREMENT, 
name varchar(15), /* Nombres compuestos */ 
surname varchar(15), 
email_address varchar(40), 
phone_number varchar(15), /* Numeros internacionales llegan hasta los 15 digitos */
dni varchar(10), /* Teniendo en cuenta NIE, NIF y DNI el mas largo es el DNI con 8 números y letra. Ponemos 10 caracteres, por si el formato es con guion "00000000-T" (10)*/
country varchar(56), /* The United Kingdom of Great Britain and Northern Ireland es el nombre mas largo de un pais (56 caracteres) */ 
zip_code varchar(5), 
address varchar(60), /* Supongamos *nombreCalle*, *numero*, *portal*, *piso*, *puerta* */ /* avenida de la comunidad de madrid, 80, 4, 3A (44 caracteres)*/
city varchar(15)
);

CREATE TABLE IF NOT EXISTS addresses(
country varchar(56), 
zip_code varchar(5), 
address varchar(60),
city varchar(15),
student_id int
);

/* Enlazamos la FOREING KEY*/
ALTER TABLE addresses ADD FOREIGN KEY (student_id) REFERENCES students(id);

/* Borramos los campos que no nos sirven */
ALTER TABLE students 
DROP COLUMN country, DROP COLUMN zip_code, DROP COLUMN address, DROP COLUMN city;

/* Escribe a continuación el código SQL solicitado: */

/* Modificamos el tamaño que tiene el campo "dni" ya que con la informacion que vamos a introducir, es pequeño */

ALTER TABLE students MODIFY dni varchar(15);

/* Introducimos datos en la tabla students */
INSERT INTO students(name, surname, email_address, phone_number, dni) VALUES ("Irvin", "Lethem", "ilethem0@google.com.au", 993870144, "279948941-9");
INSERT INTO students(name, surname, email_address, phone_number, dni) VALUES ("Kylie", "Mungan", "kmungan1@howstuffworks.com", 497494899, "748551874-7");
INSERT INTO students(name, surname, email_address, phone_number, dni) VALUES ("Yul", "Dibbert", "ydibbert2@businesswire.com", 776631050, "215649413-4");
INSERT INTO students(name, surname, email_address, phone_number, dni) VALUES ("Tamra", "Mc Gorley", "tmcgorley3@studiopress.com", 921948685, "617064473-7");
INSERT INTO students(name, surname, email_address, phone_number, dni) VALUES ("Elmira", "Imbrey", "eimbrey4@cpanel.net", 304168000, "178988896-4");


/* Introducimos datos en la tabla addresses */
INSERT INTO addresses(country, zip_code, address, city, student_id) VALUES ("Indonesia", "83297", "98339 Loftsgordon Road", "Babakanbandung", 1);
INSERT INTO addresses(country, zip_code, address, city, student_id) VALUES ("Philippines", "44455", "74641 Dwight Avenue", "Bilar", 2);
INSERT INTO addresses(country, zip_code, address, city, student_id) VALUES ("Indonesia", "62965", "9510 Milwaukee Street", "Sumberejo", 3);
INSERT INTO addresses(country, zip_code, address, city, student_id) VALUES ("Norway", "54756", "8902 Doe Crossing Alley", "Steinkjer", 4);
INSERT INTO addresses(country, zip_code, address, city, student_id) VALUES ("United States", "51471", "8616 Stephen Hill", "Charleston", 5);