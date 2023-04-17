USE nba;

/*Cuántos jugadores tiene cada equipo de la division NorthWest*/

SELECT equipos.Nombre, Count(*) as NumeroJugadores
FROM equipos 
	INNER JOIN jugadores ON equipos.Nombre = jugadores.Nombre_equipo
WHERE Division = "NorthWest"
GROUP BY equipos.Nombre;