USE nba;

/*Nombre de las divisiones de la conferencia Este*/

SELECT DISTINCT Conferencia, Division
FROM equipos
WHERE Conferencia  = "East";