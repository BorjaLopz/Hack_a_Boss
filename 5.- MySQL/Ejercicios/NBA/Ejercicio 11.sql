USE nba;

/*Asistencias por partido de Jose Calderón en la temporada 07/08*/

SELECT Asistencias_por_partido
FROM jugadores INNER JOIN estadisticas
ON jugadores.codigo = estadisticas.jugador
WHERE Nombre = "Jose calderon" AND temporada = "07/08";