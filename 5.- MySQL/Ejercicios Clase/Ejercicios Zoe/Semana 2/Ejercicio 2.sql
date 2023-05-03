USE bootcamp_zoe;

/*ALTER TABLE students ADD COLUMN age TINYINT UNSIGNED; #Generamos una nueva columna llamada age y le damos el tipo*/



#Para meter los datos

/*
UPDATE students SET age = 18 WHERE id = 1;
UPDATE students SET age = 20 WHERE id = 2;
UPDATE students SET age = 22 WHERE id = 3;
UPDATE students SET age = 19 WHERE id = 4;
UPDATE students SET age = 21 WHERE id = 5;
*/

###### OTRA OPCION ######

#Se parece a un switch de JS

UPDATE students SET age = CASE
	WHEN id = 1 THEN 20
    WHEN id = 2 THEN 18
    WHEN id = 3 THEN 19
    WHEN id = 4 THEN 22
    WHEN id = 5 THEN 22
    END;
    
SELECT * 
FROM students; 
#Aqui vemos que hemos generado la columna pero ahora mismo esta vacia