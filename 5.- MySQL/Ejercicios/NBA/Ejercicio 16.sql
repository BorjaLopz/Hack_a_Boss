USE nba;

/*Rebotes por partido de cada jugador de los Ángeles*/

/*
SELECT temporada, jugadores.Nombre, estadisticas.Rebotes_por_partido as Media_Rebotes
FROM equipos 
	INNER JOIN jugadores ON equipos.Nombre = jugadores.Nombre_equipo
    INNER JOIN estadisticas ON jugadores.codigo = estadisticas.jugador
WHERE Ciudad = "Los Angeles";*/

SELECT jugadores.Nombre, AVG(Rebotes_por_partido) as rebounds
FROM jugadores
	INNER JOIN estadisticas ON jugadores.codigo = estadisticas.jugador
    INNER JOIN equipos ON equipos.Nombre = jugadores.Nombre_equipo
WHERE Ciudad = "Los Angeles"
GROUP BY jugadores.Nombre;