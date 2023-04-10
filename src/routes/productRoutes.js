const { Router } = require("express");
const app = Router();
const controllerProducts = require("../controllers/productsController");

//proceso de multer aca 





app.get("/createProduct",controllerProducts.createProduct);

app.get("/editionProduct",controllerProducts.editionProduct);

app.get("/productCart", controllerProducts.productCart);

//metodo http
app.get("/productDetail/:id", controllerProducts.productDetail);







module.exports = app