const { Router } = require("express");
const app = Router();
const controllerProducts = require("../controllers/productsController");


app.get("/createProduct",controllerProducts.createProduct);

app.get("/editionProduct",controllerProducts.editionProduct);

//app.get("/editionProduct/:id/edit",controllerProducts.edit);


//app.put("/editionProduct/:id",controllerProducts.edit);


//app.delete("/editionProduct/:id",controllerProducts.delete);


//rutas para eliminar y buscar productos / (rutas parametrisadas) con CRUD



module.exports = app