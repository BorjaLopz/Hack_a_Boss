USE nba;

/*Número de pivots ‘C’ que tiene cada equipo*/

SELECT equipos.Nombre, Count(*) as NumeroDePivots
FROM jugadores
	INNER JOIN equipos ON jugadores.Nombre_equipo = equipos.Nombre
WHERE Posicion LIKE "%C%"
GROUP BY equipos.Nombre;