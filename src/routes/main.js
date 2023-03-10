const { Router } = require("express");
const app = Router();
const mainController = require("../controllers/main"); // requeri los controladores aca

//cree rutas y llame a los controladores para poder controlarlas 
app.get("/", mainController.home)

app.get("/login", mainController.login);

app.get("/productCart", mainController.productCart);

app.get("/productDetail", mainController.productDetail);

app.get("/register", mainController.register);

module.exports = app