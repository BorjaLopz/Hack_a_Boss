USE nba;

/*Jugadores de Arizona que pesan más de 100 kg (* 2.20462 a libras) y miden más de 1.82 m (5 pies, 11.6 pulgadas) (Según Rafa es 5-9)*/

SELECT *
FROM jugadores
WHERE Procedencia = "Arizona" AND Peso > (100 * 2.20462) AND Altura > (5-11);