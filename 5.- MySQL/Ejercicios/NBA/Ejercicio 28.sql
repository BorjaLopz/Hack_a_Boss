USE nba;

/*Primeros 10 jugadores por orden alfabético*/

SELECT nombre, nombre_equipo
FROM jugadores
ORDER BY nombre asc
LIMIT 10;