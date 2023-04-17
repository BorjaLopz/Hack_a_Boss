USE nba;

/*Cuantos jugadores argentinos juegan en la NBA*/

SELECT Procedencia, Count(*) as NumeroJugadores
FROM jugadores
WHERE Procedencia = "argentina"
GROUP BY Procedencia;