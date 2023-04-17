USE nba;

/*Número de equipos por conferencia*/

SELECT Conferencia, Count(*)
FROM equipos
GROUP BY Conferencia;