const {Router} = require('express'); // Requerimos express (Solo para el método Router)
const app = Router(); // Guardamos la ejecución de express.Router
const productController = require('../controllers/productController'); // Requerimos el controlador específico de productos

app.get('/', productController.list); // Ruta hacia el listado de produtos

app.get('/detail', productController.show); // Ruta hacia el detalle de produto

app.get("/edit/:id",productController.edit)

app.put("/update/:id",productController.update)

app.delete("/delete/:id",productController.delete)

app.get('/create', productController.create); // Ruta hacia el formulario de creación de produtos

app.post("/save",productController.save)


// Exportamos la ejecución de express.Router
module.exports = app;