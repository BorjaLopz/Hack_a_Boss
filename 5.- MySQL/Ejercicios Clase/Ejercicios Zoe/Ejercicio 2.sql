USE bootcamp_ejerciciozoe;

CREATE TABLE IF NOT EXISTS addresses (
	id INT PRIMARY KEY AUTO_INCREMENT, 
    country VARCHAR(60), 
    zip_code INT, 
    address VARCHAR(150), 
    city VARCHAR(60),
    FOREIGN KEY (id) REFERENCES students (id)
);

ALTER TABLE students 
DROP COLUMN country, 
DROP COLUMN zip_code, 
DROP COLUMN address, 
DROP COLUMN city 