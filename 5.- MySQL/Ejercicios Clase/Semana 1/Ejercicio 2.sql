CREATE DATABASE IF NOT EXISTS bootcamp;
USE bootcamp;

/* pega a continuación el CREATE TABLE completo que hiciste ejercicio anterior */
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

/* Escribe a continuación el código SQL solicitado: */
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

