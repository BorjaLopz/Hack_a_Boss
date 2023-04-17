CREATE DATABASE IF NOT EXISTS bootcamp;
USE bootcamp;

/* Escribe a continuación el código SQL solicitado: */
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