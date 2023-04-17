USE nba;

/*Máximo reboteador de los Suns*/

SELECT Nombre, MAX(avg_rebounds)
FROM 
	(SELECT Nombre, AVG(Rebotes_por_partido) as avg_rebounds
        FROM jugadores INNER JOIN estadisticas ON jugadores.codigo = estadisticas.jugador
        WHERE Nombre_equipo = "Suns"
        GROUP BY Nombre
        ORDER BY avg_rebounds DESC)
	as subquery