const { Router } = require("express");
const app = Router();
const controllerUsers = require("../controllers/usersController");

//rutas de login y register llamadas desde su controlador
app.get("/login", controllerUsers.login );

app.get("/register", controllerUsers.register);

module.exports = app