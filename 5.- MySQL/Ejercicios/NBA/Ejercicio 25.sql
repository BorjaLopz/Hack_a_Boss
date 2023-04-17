USE nba;

/*Peso medio en kilos de los jugadores de los Raptors*/

SELECT AVG(Peso/2.205) as PesoMedio
FROM jugadores
WHERE jugadores.Nombre_equipo = "Raptors";