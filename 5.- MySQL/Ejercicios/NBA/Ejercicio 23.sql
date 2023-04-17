USE nba;

/*Jugadores que no metieron ningún punto el alguna temporada*/

SELECT jugadores.nombre, jugadores.nombre_equipo, temporada, puntos_por_partido
FROM estadisticas
	INNER JOIN jugadores ON estadisticas.jugador = jugadores.codigo
WHERE Puntos_por_partido = 0;