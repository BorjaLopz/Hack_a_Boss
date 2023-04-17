USE nba;

/*Número de bases ‘G’ que tiene cada equipo de la conferencia Este*/

SELECT equipos.Nombre, Count(*) as NumeroDeBases
FROM equipos 
	INNER JOIN jugadores ON equipos.nombre = jugadores.Nombre_equipo
WHERE Conferencia  = "East" AND Posicion LIKE "%G%"
GROUP BY equipos.Nombre;