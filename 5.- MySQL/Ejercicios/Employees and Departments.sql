USE exercisetwo;

/*Select the last name of all employees.*/
/*
SELECT LastName
From employees;
*/

/*Select the last name of all employees, without duplicates*/
/*
SELECT DISTINCT LastName
From employees;
*/

/*Select all the data of employees whose last name is "Smith".*/

/*
SELECT * 
FROM employees
WHERE LastName = "Smith";
*/

/*Select all the data of employees whose last name is "Smith" or "Doe".*/

/*
SELECT *
FROM employees
WHERE LastName = "Smith" OR LastName = "Doe";
*/

/*Select all the data of employees that work in department 14.*/

/*
SELECT *
FROM employees
WHERE department = 14;
*/

/*Select all the data of employees that work in department 37 or department 77.*/

/*
SELECT * 
FROM employees
WHERE department IN (37, 77);
*/

/*Select all the data of employees whose last name begins with an "S".*/

/*
SELECT *
FROM employees
WHERE LastName LIKE "%S";
*/

/* Select the sum of all the departments' budgets.*/

/*
SELECT SUM(budget)
FROM Departments;
*/

/*Select the number of employees in each department (you only need to show the department code and the number of employees).*/

/*
SELECT Department, Count(*)
FROM employees
GROUP BY Department;
*/

/*Select all the data of employees, including each employee's department's data.*/

/*SELECT Department,  Count(*) as Numero_de_personas FROM employees GROUP BY Department;*/
 /* ASI NO SE HACEN JOINS */
/*SELECT * FROM employees, departments WHERE departments.Code= 14;*/
/*
SELECT employees.Name, employees.LastName, departments.name
FROM employees, departments
WHERE employees.Department = departments.Code;
*/

/* Primer acercamiento a los inner join */
/*
SELECT * 
FROM employees INNER JOIN departments;
*/

/*
SELECT * 
FROM employees 
INNER JOIN departments
ON departments.Code = employees.Department;
*/
/*
SELECT departments.Name, employees.LastName, Count(*) as numberOfRegisters
FROM employees
INNER JOIN departments
ON departments.Code = employees.Department
GROUP BY employees.LastName
HAVING numberOfRegisters > 1;*/

/*SELECT * FROM employees LEFT OUTER JOIN departments ON departments.Code = employees.Department;*/

/*SELECT * FROM employees RIGHT JOIN departments ON departments.Code = employees.Department;*/
