const express = require("express");
const app = new express();
require("dotenv").config();

const userController = require("./Controllers/users");

/* Lo usaremos en el paso 4 del tutorial*/
const bodyParser = require("body-parser");

/* https://www.tutorialspoint.com/expressjs/expressjs_routing.htm  */

/* PRIMERA PARTE DEL EJEMPLO */
/*
app.get("/", function(req, res) {
    res.send("Hello world!");
});
*/

/* SEGUNDA PARTE DEL EJEMPLO */

/* AÑADIMOS /hello AL URL PARA QUE FUNCIONE, SOLO CON EL VERBO GET */

/*app.get("/hello", function (req, res) {
  res.send("Hello world desde get");
});*/

/* CON DISTINTOS VERBOS DE HTTP */

/*app.post("/hello", function (req, res) {
  res.send("Hello world desde post!")
})*/

/* SI QUISIERAMOS ACTUAR INDEPENDIENTEMENTE DEL VERBO DEL HTTP USAREMOS ESTO */
/*app.all("/hello", function (req, res) {
  res.send("Hello world y nos da igual el metodo!!")
})*/

/* TERCERA PARTE DEL EJEMPLO */

/*app.get("/:id", function(req, res) {
  res.send(`The id you specifies is ` + req.params.id);
});*/

/*app.get("/:name/:id", function (req, res) {
  res.send("id: " + req.params.id + " name: " + req.params.name);
});*/

/* CUARTA PARTE DEL EJEMPLO */

/* YA TENEMOS EL GET EN USERS.JS */

/*app.get("/", (req, res) => {
  try {
    res.status(200).send(users);
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: e.message });
  }
});*/

/* "GUARDAMOS" A LOS USUARIOS EN NUESTRA ARRAY */

// app.post("/", (req, res) => {
//   const newUser = {
//     userName: req.body.user,
//     userEmail: req.body.email,
//     userAge: req.body.age,
//   };

//   users.push(newUser);
//   res.status(200).send(newUser);
// });

// app.put("/:name/:lastName", (req, res) => {
//   users.forEach((user) => {
//     if (user.userName === req.params.name) {
//       user.userName = req.params.name;
//     }
//   });
//   res.status(200).send(users);
// });

// app.put("/:name", (req, res) => {
//   users.forEach((users) => {
//     if (user.userName === req.params.name) {
//       user.userName = req.body.user;
//       user.userEmail = req.body.email;
//       user.userAge = req.body.age;
//     }
//   });
// });

// app.delete("/:name", (req, res) => {
//   const elementIndex = users.findIndex(
//     (user) => user.userName === req.params.name
//   );
//   users.splice(elementIndex, 1);
//   res.status(200).send(users);
// });

app.use(bodyParser.json());

app.get("/users/all", userController.getAllUsers);
app.post("/users", userController.addUsers);
app.put("/users/:name", userController.updateUser);
app.delete("/users/:name", userController.deleteUser);

/* PUERTO DEL SERVER */
// app.listen(8000);

app.listen(process.env.PORT, () => {
  console.log(`Server listening to port ${process.env.PORT}`);
});
  