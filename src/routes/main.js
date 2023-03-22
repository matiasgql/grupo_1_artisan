const { Router } = require("express");
const app = Router();
const mainController = require("../controllers/main"); // requeri los controladores aca

//cree rutas y llame a los controladores para poder controlarlas 
app.get("/", mainController.home)

app.get("/productCart", mainController.productCart);

//metodo http
app.get("/productDetail/", mainController.productDetail);
//app.get("/productDetail/:id", mainController.productDetail);
//app.post()

module.exports = app