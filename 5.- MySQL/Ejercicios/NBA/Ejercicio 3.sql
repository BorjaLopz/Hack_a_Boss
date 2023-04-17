USE nba;

/*Puntos por partido de ‘Pau Gasol’ en todas las temporadas*/

SELECT temporada, jugadores.Nombre, Puntos_por_partido 
FROM estadisticas INNER JOIN jugadores
ON estadisticas.jugador = jugadores.codigo
WHERE jugadores.Nombre = "Pau Gasol";
