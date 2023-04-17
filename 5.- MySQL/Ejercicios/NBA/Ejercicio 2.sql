USE NBA;

/*Equipos cuyo nombre comienza por H y finaliza por S*/

SELECT Nombre
FROM equipos
WHERE Nombre LIKE "H%" AND Nombre LIKE "%S";