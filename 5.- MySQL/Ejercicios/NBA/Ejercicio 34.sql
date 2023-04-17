USE nba;

/*Máximo anotador en una temporada*/

SELECT nombre, nombre_equipo, puntos_por_partido
FROM jugadores
	INNER JOIN estadisticas ON estadisticas.jugador = jugadores.codigo
WHERE estadisticas.puntos_por_partido = 
	(
		SELECT MAX(Puntos_por_partido)
        FROM estadisticas
    )