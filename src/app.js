const {resolve} = require("path")
const express = require("express")
//const sessionExpress = require("express-session")
const app = express()
const port = 4060

//requerimos express session
//app.use(session ({secret: "Mensaje Secreto"}));

//motor de vistas para ejs  y cambie los archivos html a ejs 
app.set ('views', resolve(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}))
app.use(express.json())

//archivo para poner estatica  y hacer publica la carpeta "public"
app.use(express.static(resolve(__dirname,"../public")))

//levanto servidor 
app.listen(port,()=>console.log("El servidor " + port + " se levanto"))



// todas las rutas exportadas desde sus respectivos controladores
const homeRoutes = require("./routes/main")
app.use("/",homeRoutes)

const productRoutes = require("./routes/productRoutes");
app.use("/product",productRoutes);

const usersRoutes = require ("./routes/users")
app.use("/users", usersRoutes)

// npm i express-validator para instalar express validator

// npm install method-override --save para poder usar PUT y DELETE

