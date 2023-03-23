const { Router } = require("express");
const app = Router();
const mainController = require("../controllers/main"); // requeri los controladores aca

//cree rutas y llame a los controladores para poder controlarlas 
app.get("/", mainController.home)

module.exports = app