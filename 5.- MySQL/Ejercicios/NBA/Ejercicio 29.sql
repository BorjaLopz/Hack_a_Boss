USE nba;

/*Temporada con más puntos por partido de Kobe Bryant*/


SELECT  MAX(Puntos_por_partido)
FROM jugadores
	INNER JOIN estadisticas ON jugadores.codigo = estadisticas.jugador
WHERE nombre = "kobe bryant";


