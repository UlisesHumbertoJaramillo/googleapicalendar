const express = require("express");
const bodyParser = require("body-Parser");
const app = express();
const router = require("./router");
const ruta = require("path");
const cors = require("cors");

//app.listen(80, "192.168.0.103");
app.listen(5000, () => console.log("server on port 5000")); //testing
///////////////MIDLEWARES///////////////
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //para que express puede entender los objetos json
app.use(express.static("."));
app.use(cors()); //Para que todas las rutas sean accesibles por otra app dentro de la maquina

//////////////ROUTER/////////////////
/*
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, () => console.log("server on port"+ port));
*/
app.use("/", router);