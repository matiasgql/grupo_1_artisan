const {resolve} = require("path");
const express = require("express");
const session = require("express-session");
const app = express();
const port = 4060;
const userLogueadoMiddleware = require("./middlewares/userLogueadoMidlewares")
const cookies = require("cookie-parser")

app.use(userLogueadoMiddleware)

app.use(session({
    secret: "clave secreta",
    resave: false,
    saveUninitialized: false,
}));

//pongo la cookie aca para usarla en el app.js
app.use(cookies());

//traigo el middleware para loguear y mostrar la barra de nevegacion al usuario si esta logueado o no
app.use(userLogueadoMiddleware);

//motor de vistas para ejs  y cambie los archivos html a ejs 
app.set ('views', resolve(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//archivo para poner estatica  y hacer publica la carpeta public
app.use(express.static(resolve(__dirname,"../public")))

//levanto servidor 
app.listen(port,()=>console.log("El servidor " + port + " se levanto"))

//todas las rutas exportadas desde sus respectivos controladores
const homeRoutes = require("./routes/main")
app.use("/",homeRoutes)

const productRoutes = require("./routes/productRoutes");
app.use("/product",productRoutes);

const usersRoutes = require ("./routes/users")
app.use("/users", usersRoutes)


//***COSAS PARA COMPLETAR*** 

//IMPLEMENTACIÓN DE FUNCIONALIDAD PARA EDICIÓN DE UN PRODUCTO.

//IMPLEMENTACIÓN DE FUNCIONALIDAD PARA BORRAR UN PRODUCTO--> se borra bien pero fijarse si se puede borrar desde una vista 

//VISTA DE FORMULARIO PARA EDITAR UN USUARIO Y MODELO DE EDITAR USUARIO 


// ACORDATE DE CORREGIR ERRORES CON PROFES EN LA VISTA DE LA HOME


