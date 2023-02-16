const path = require("path")
const express = require("express")
const app = express()
const port = 4040

app.use(express.static("public"))

app.listen(port,()=>console.log("El servidor " + port + " se levanto"))

app.get("/", (req, res) => {res.sendFile(path.join(__dirname,"/views/home.html"))})

app.get("/register", (req, res) => {res.sendFile(path.join(__dirname,"/views/register.html"))})

app.get("/login", (req, res) => {res.sendFile(path.join(__dirname,"/views/login.html"))})

app.get("/detalle_procuto", (req, res) => {res.sendFile(path.join(__dirname,"/views/productDetail.html"))})

app.get("/carrito_de_compra", (req, res) => {res.sendFile(path.join(__dirname,"/views/productCart.html"))})
