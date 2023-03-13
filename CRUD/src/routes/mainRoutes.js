const {Router} = require('express'); // Requerimos express (Solo para el método Router)
const app = Router(); // Guardamos la ejecución de express.Router
const mainController = require('../controllers/mainController'); // Requerimos el controlador

app.get('/', mainController.index); // Ruta hacia la página de inicio

app.get('/register', mainController.register); // Ruta hacia la página de registro

app.get('/login', mainController.login); // Ruta hacia la página de login

app.get('/cart', mainController.cart); // Ruta hacia la página de carrito

// Exportamos la ejecución de express.Router
module.exports = app;