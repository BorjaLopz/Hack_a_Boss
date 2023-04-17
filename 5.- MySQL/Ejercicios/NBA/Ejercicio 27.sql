USE nba;

/*Puntuación más baja de un partido de la NBA*/

SELECT codigo, equipo_local, puntos_local, equipo_visitante, puntos_visitante, puntos_local + puntos_visitante as PuntosTotales
FROM partidos
WHERE puntos_local + puntos_visitante = (SELECT MIN(puntos_local + puntos_visitante) FROM partidos);