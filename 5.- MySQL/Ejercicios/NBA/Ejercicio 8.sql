USE nba;

/*Cuántos jugadores tiene cada equipo de la conferencia Oeste*/

SELECT equipos.Nombre, count(*) as NumeroJugadores
FROM equipos INNER JOIN jugadores
ON equipos.Nombre = jugadores.Nombre_Equipo
WHERE Conferencia = "West"
GROUP BY equipos.Nombre;