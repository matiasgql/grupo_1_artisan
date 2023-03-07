const path = require("path")
const express = require("express")
const app = express()
const port = 4060
let datosHome = []
let datosAnimales = require("../data/datosAnimales.json")

datosHome.push({
    categoriaNombre: "Animales",
    datosAnimales: datosAnimales
})

app.use(express.static(path.join(__dirname,"../../../public")))

app.listen(port,()=>console.log("El servidor " + port + " se levanto"))

app.get("/", (req, res) => {res.render(path.join(__dirname,"../views/home.ejs"), {datosHome})});//res.sendFile(path.join(__dirname,"../views/home"))})

app.get("/register", (req, res) => {res.sendFile(path.join(__dirname,"../views/register.html"))})

app.get("/login", (req, res) => {res.sendFile(path.join(__dirname,"../views/login.html"))})

app.get("/detalle_producto", (req, res) => {res.sendFile(path.join(__dirname,"../views/productDetail.html"))})

app.get("/carrito_de_compra", (req, res) => {res.sendFile(path.join(__dirname,"../views/productCart.html"))})

