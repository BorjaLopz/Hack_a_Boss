USE nba;

/*Puntos por partido de los jugadores de los Cavaliers*/

SELECT temporada, jugadores.Nombre, Puntos_por_partido
FROM jugadores INNER JOIN estadisticas
ON estadisticas.jugador = jugadores.codigo
WHERE jugadores.Nombre_equipo = "Cavaliers"
ORDER BY temporada;