const { Router } = require("express");
const app = Router();
const controllerProducts = require("../controllers/productsController");


app.get("/createProducts",controllerProducts.createProduct);

app.get("/editionProduct",controllerProducts.editionProduct);

module.exports = app