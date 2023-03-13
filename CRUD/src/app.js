const express = require('express'); // Requerimos express
const {resolve} = require('path'); // Requerimos path (solo para el método resolve)
const app = express(); // Guardamos la ejecución de express

// Inicializamos el servidor
app.listen(3000, () => console.log("Servidor corriendo en el puerto " + 3000));

// Definimos la ruta publica
app.use(express.static(resolve(__dirname, '../public')));

// Establecemos el motor de vistas EJS
app.set ('views', resolve(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}))
app.use(express.json())


// Traemos y usamos las rutas principales
const indexRoutes = require('./routes/mainRoutes');
app.use("/",indexRoutes);

// Traemos y usamos las rutas de productos
const productRoutes = require('./routes/productRoutes');
app.use("/products",productRoutes);