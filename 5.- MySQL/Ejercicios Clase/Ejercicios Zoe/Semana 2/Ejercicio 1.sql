USE bootcamp_zoe;


SELECT * 
FROM students s JOIN addresses a
ON s.id = a.id_student;

SELECT name, country
FROM students s LEFT JOIN addresses a
ON s.id = a.id_student

UNION

SELECT name, country
FROM students s RIGHT JOIN addresses a
ON s.id = a.id_student;

/*
SELECT name, lastname, email 
FROM students s JOIN addresses a 
ON s.id = a.id_student
WHERE country = "Indonesia";
*/

/*
SELECT *
FROM students;
*/
# hacemos left join porque si hay algun usuario que no tenga direccion, pueda decir desconocida en lugar de olvidarnos del usuario #

/*
INSERT INTO students (name, lastname, email, tlf, dni) VALUES 
('Irvin_2', 'Lethem_2', 'ilethem0@google.com.au_2', 993870142, '279948941_2');
*/
