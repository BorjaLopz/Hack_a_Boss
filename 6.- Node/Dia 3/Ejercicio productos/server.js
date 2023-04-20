const express = require("express");
const app = new express();
require("dotenv").config();

/* De esta manera haremos un parseo del documento*/
const bodyParser = require("body-parser");

/* USAMOS EL PARSEADOS DE JSON*/
app.use(bodyParser.json());

/* ARRAY DE PRODUCTOS */
// const Products = [{ id: 1, nombre: "producto1" }];
const products = [];

app.get("/", (req, res) => {
  try {
    res.status(200).send(products);
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: e.message });
  }
});

app.get("/:id", (req, res) => {
  try {
    //Necesitamos hacer un parseInt para convertir de string a int el req.params.id
    const elementIndex = products.find((p) => p.id === parseInt(req.params.id));
    res.send(elementIndex);
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: e.message });
  }
});

app.post("/", (req, res) => {
  /* CREAMOS EL PRODUCTO*/
  const newProduct = {
    id: req.body.id,
    productName: req.body.name,
    productDescription: req.body.description,
    productPrice: req.body.price,
    productstock: req.body.stock,
  };

  /* PUSHEAMOS A NUESTRA ARRAY EL PRODUCTO QUE ACABAMOS DE CREAR */
  products.push(newProduct);
  res.status(200).send(newProduct);
});

app.put("/:id", (req, res) => {
  //Buscamos un producto que coincida con el parametro introducido, y modificamos su contenido parseando todo el contenido del body
  products.forEach((p) => {
    if (p.id === parseInt(req.params.id)) {
      (p.id = req.body.id),
        (p.productName = req.body.name),
        (p.productDescription = req.body.description),
        (p.productPrice = req.body.price),
        (p.productstock = req.body.stock);
    }
  });

  //Mostramos todos los productos para comprobar la actualización
  res.send(products);
});

app.delete("/:id", (req, res) => {
  //Buscamos si hay algun produc.id que coincida con el parametro introducido.
  const elementIndex = products.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );

  //Eliminamos ese producto del array de products
  products.splice(elementIndex, 1);

  //Mostramos los productos que quedan en el array
  res.status(200).send(products);
});

/* PUERTO DEL SERVER */
app.listen(process.env.PORT, () => {
  console.log(`Server listening to port ${process.env.PORT}`);
});
