USE bootcamp_zoe;

SELECT Max(age) FROM students;

SELECT name, age
FROM students 
WHERE age = 
	(
		SELECT Max(age)
        FROM students
    )