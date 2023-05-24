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


/* Select the sum of all the departments' budgets. */
/*
SELECT SUM(Budget) as Suma
FROM departments;
*/

/* Select the number of employees in each department (you only need to show the department code and the number of employees)*/
/*
SELECT employees.Department, Count(Department)
FROM employees
GROUP BY employees.Department;
*/

/*Select all the data of employees, including each employee's department's data.*/
/*
SELECT *
FROM employees
LEFT OUTER JOIN departments on departments.Code = employees.Department;
*/

/* Segun ejercicios */
/*
SELECT *
FROM employees E INNER JOIN departments D
ON E.Department = D.Code;
*/

/*Select the name and last name of each employee, along with the name and budget of the employee's department.*/

/*
SELECT employees.Name, employees.LastName, departments.Name as departmentName, departments.Budget
FROM employees INNER JOIN departments
ON departments.Code = employees.department;
*/


/*Select the name and last name of employees working for departments with a budget greater than $60,000.*/

/* OPCION 1*/

SELECT employees.Name, LastName, Budget
FROM employees INNER JOIN departments
ON departments.Code = employees.department
WHERE departments.budget >= 60000;



/* OPCION 2*/
/*
SELECT employees.Name, LastName, Budget
FROM employees INNER JOIN departments
ON departments.Code = employees.department
AND departments.budget >= 60000;
*/

/*Select the departments with a budget larger than the average budget of all the departments.*/
/*
SELECT *
FROM departments
WHERE Budget >= (SELECT AVG(Budget) FROM departments);
*/

/*Select the names of departments with more than two employees.*/
/*
SELECT departments.Name 
FROM departments
WHERE 2 < 
(
	SELECT COUNT(*)
    FROM employees
    WHERE departments.Code = employees.department
);
*/

/*Select the name and last name of employees working for departments with second lowest budget.*/

/*
SELECT employees.Name, LastName
FROM employees
WHERE employees.Department = (
	SELECT sub.Code
    From (SELECT * FROM Departments ORDER BY Departments.Budget LIMIT 2) sub
    ORDER BY budget DESC LIMIT 1);
*/

/*Add a new department called "Quality Assurance", with a budget of $40,000 and departmental code 11. Add an employee called "Mary Moore" in that department, with SSN 847-21-9811.*/
/*INSERT INTO Departments(Code, Name, Budget) VALUES (11, "Quality Assurance", 40000);*/
/*INSERT INTO employees(SSN, Name, LastName, Department) VALUES ("847219811", "Mary", "Moore", 11);*/

/*Reduce the budget of all departments by 10%.*/
/*
SELECT *, Budget * 0.9 AS Discount
FROM departments;
*/

/*Reassign all employees from the Research department (code 77) to the IT department (code 14).*/
/*UPDATE employees
SET
	Department = 14
WHERE
	Department=77;
*/
	











