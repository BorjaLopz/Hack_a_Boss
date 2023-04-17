USE nba;

/*Cuanto pesa (en libras y en kilos) el jugador más alto */

SELECT Nombre, altura, peso as PesoEnLibras, peso/2.205 as PesoEnKg
FROM jugadores
WHERE altura = (SELECT MAX(altura) FROM jugadores)