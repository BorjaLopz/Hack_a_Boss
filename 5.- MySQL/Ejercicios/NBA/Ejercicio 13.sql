USE nba;

/*Cuántos jugadores tiene cada equipo de la conferencia Este (East)*/

SELECT equipos.Nombre, Count(*) as NumeroJugadores
FROM equipos INNER JOIN jugadores
ON equipos.nombre = jugadores.Nombre_equipo
WHERE Conferencia = "East"
GROUP BY equipos.Nombre;