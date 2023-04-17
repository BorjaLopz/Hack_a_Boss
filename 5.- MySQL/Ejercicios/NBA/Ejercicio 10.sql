USE nba;

/*En qué temporada Lebron James consiguió más puntos por partido*/

SELECT MAX(Puntos_por_partido) as Maximo_de_Puntos_por_Partido
FROM jugadores INNER JOIN estadisticas
ON jugadores.codigo = estadisticas.jugador
WHERE Nombre = "Lebron James"