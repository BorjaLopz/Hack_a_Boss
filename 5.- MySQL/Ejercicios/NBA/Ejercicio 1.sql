USE NBA;

/*Equipos y ciudad de los jugadores españoles de la NBA*/

SELECT equipos.Nombre, equipos.Ciudad, jugadores.Nombre, Procedencia
FROM equipos INNER JOIN jugadores
ON equipos.Nombre = jugadores.Nombre_Equipo
WHERE Procedencia = "Spain";
