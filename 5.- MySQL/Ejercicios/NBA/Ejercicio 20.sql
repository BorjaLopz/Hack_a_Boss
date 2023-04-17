USE nba;

/*Cuanto mide el jugador más alto y más bajo de la NBA*/

SELECT nombre, nombre_equipo, altura
FROM jugadores
WHERE altura = (
	SELECT MAX(altura)
    FROM jugadores
    ) OR 
    altura = (
    SELECT MIN(altura)
    FROM jugadores
    )

    
