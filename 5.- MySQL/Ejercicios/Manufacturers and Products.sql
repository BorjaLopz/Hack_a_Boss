CREATE DATABASE IF NOT EXISTS exerciseOne;
USE exerciseOne;

/* Select the names of all the products in the store. */

/*
SELECT name 
FROM products;
*/

/* Select the names and the prices of all the products in the store. */
/*
SELECT name, price
FROM products;
*/

/* EXTRA SI QUEREMOS ORDENAR POR PRECIO */
/*ORDER BY price;*/

/* Select the name of the products with a price less than or equal to $200. */

/*
SELECT name, price
FROM products
WHERE price <= 200;
*/

/* Select all the products with a price between $60 and $120. */

/*
SELECT *
FROM products
WHERE price >= 60 AND price <=120;
*/

/* Select the name and price in cents (i.e., the price must be multiplied by 100). */

/*
SELECT name, price*100 AS Precio_en_centimos
FROM products
ORDER BY price;
*/

/* Compute the average price of all the products. */

/*
SELECT AVG(price) AS PRECIO_MEDIO
FROM products;
*/

/* Select the name of each manufacturer along with the name and price of its most expensive product. */

/* Add a new product: Loudspeakers, $70, manufacturer 2. */

/*
INSERT INTO products(Code,Name,Price,Manufacturer) VALUES(11,'Loudspeakers',70,2);
*/

/* Update the name of product 8 to "Laser Printer". */

/*
UPDATE products
SET 
	name="Laser Printer"
WHERE
	Code=8;
*/	

/* Apply a 10% discount to all products. */

/* Update actualizara los datos en memoria, mejor utilizar un select para poder modificar los datos*/
/*
 UPDATE products
 SET 
	price = price *0.9;
*/

/*
SELECT name, price * 0.9 AS Precio_Con_Descuento
FROM products;
*/

/* Apply a 10% discount to all products with a price larger than or equal to $120. */

/*
UPDATE products
SET 
	price = price * 0.9
WHERE
	price >= 120;
*/

SELECT name, price * 0.9 AS Precio_Con_Descuento_Para_MayorIgualQue_120
FROM products
WHERE price >= 120;


