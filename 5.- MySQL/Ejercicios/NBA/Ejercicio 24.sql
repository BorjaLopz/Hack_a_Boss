USE nba;

/*Número de jugadores en cada división*/

SELECT Division, COUNT(*) 
FROM equipos
	INNER JOIN jugadores ON equipos.Nombre = jugadores.Nombre_equipo
GROUP BY Division;