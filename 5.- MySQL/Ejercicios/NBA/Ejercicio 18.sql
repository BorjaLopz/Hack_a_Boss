USE nba;

/*Número de jugadores españoles o franceses*/

SELECT Procedencia, COUNT(*)
FROM jugadores
WHERE Procedencia = "Spain" OR Procedencia = "France"
GROUP BY Procedencia;