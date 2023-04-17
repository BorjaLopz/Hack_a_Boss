USE nba;

/*Jugadores cuya 3ª letra de su nombre es una ‘v’*/

SELECT Nombre,  Nombre_Equipo, Posicion
FROM jugadores
WHERE Nombre LIKE "__v%";