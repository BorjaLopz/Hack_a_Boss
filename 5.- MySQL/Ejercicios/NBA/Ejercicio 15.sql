USE nba;

/*Media de rebotes de los jugadores de la conferencia Este*/

SELECT AVG(rebotes_por_partido) as RebotesMedia, jugadores.Nombre
FROM equipos
	INNER JOIN jugadores ON equipos.Nombre = jugadores.Nombre_equipo
    INNER JOIN estadisticas ON jugadores.codigo = estadisticas.jugador
WHERE Conferencia = "East"
GROUP BY jugadores.Nombre;