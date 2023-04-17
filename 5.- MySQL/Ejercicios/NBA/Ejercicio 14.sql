USE nba;

/*Tapones por partido de los jugadores de los Blazers*/
/*Como el equipo no sale, lo vamos a hacer con Bobcat*/

SELECT temporada, Nombre, Tapones_por_partido
FROM jugadores INNER JOIN estadisticas
ON jugadores.codigo = estadisticas.jugador
WHERE Nombre_equipo = "Bobcats"
ORDER BY temporada;