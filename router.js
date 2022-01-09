const express = require("express");
const router = express.Router();
const ruta = require("path");
const jwt = require("jsonwebtoken");

//lista de funciones que se van a usar en las rutas
const funciones = require("./funciones");


//CREAR UN EVENTO
router.post("/crearevento", funciones.createEvent);

//OBTENER UN EVENTO
router.get("/evento/:id", funciones.getEvent);

//ACTUALIZAR UN EVENTO
router.put("/evento/:id", funciones.updateEvent);

//BORRAR UN EVENTO
router.delete("/evento/:id", funciones.deleteEvent);

/*
//MIDDLEWARE PARA VERIFICACION
function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    //se tiene que crear una cabecera en la peticion
    return res.status(401).send("Autorizacion inexistente");
  }

  const token = req.headers.authorization.split(" ")[1]; //<--¬
  //la cabecera autorization se compone de la palabra bearer y el token, es por eso que lo tenemos que separar
  if (!token) {
    return res.status(401).send("token inexistente");
  }

  const payload = jwt.verify(token, "palabrasecreta");
  //el payload contiene el token y otros datos(solo necesitamos el token)

  //req.userId = payload.iat; //crea una cabecera que contiene el id del registro (REVISAR)
  console.log(payload);
  req.userPass = payload.pass;
  next();
}
*/