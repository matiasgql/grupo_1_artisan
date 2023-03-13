const {resolve} = require("path")
const express = require("express")
const app = express()
const port = 4060

//motor de vistas para ejs  y cambie los archivos html a ejs 
app.set ('views', resolve(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}))
app.use(express.json())

//archivo para poner estatica  y hacer publica la carpeta "public"
app.use(express.static(resolve(__dirname,"../public")))

//levanto servidor 
app.listen(port,()=>console.log("El servidor " + port + " se levanto"))


const homeRoutes = require("./routes/main")
app.use("/",homeRoutes)

const productRoutes = require("./routes/productRoutes");
app.use("/products",productRoutes);


// renderise rutas e use el resolve 
/*app.get("/", (req, res) => {res.render(resolve(__dirname, "views", "home.ejs"), {datosHome})});

app.get("/register", (req, res) => {res.render(resolve(__dirname, "views", "register.ejs"))})

app.get("/login", (req, res) => {res.render(resolve(__dirname, "views", "login.ejs"))})

app.get("/detalle_producto", (req, res) => {res.render(resolve(__dirname, "views", "productDetail.ejs"))})

app.get("/carrito_de_compra", (req, res) => {res.render(resolve(__dirname, "views", "productCart.ejs"))})*/


// npm i express-validator para instalar express validator

// npm install method-override --save para poder usar PUT y DELETE

