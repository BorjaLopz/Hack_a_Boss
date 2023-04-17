USE nba;

/*Puntos por partido de Lebron James de la temporada 03/04 a la 05/06*/

SELECT temporada, Nombre, Puntos_por_partido
FROM jugadores INNER JOIN estadisticas
ON jugadores.codigo = estadisticas.jugador
WHERE Nombre = "Lebron James" AND temporada IN ("03/04", "04/05", "05/06");