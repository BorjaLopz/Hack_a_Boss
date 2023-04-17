USE nba;

/*Jugadores cuyo nombre comienza por Y*/

SELECT Nombre, Nombre_equipo
FROM jugadores
WHERE Nombre LIKE "Y%";