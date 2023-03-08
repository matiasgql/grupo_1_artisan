const path = require("path")
const express = require("express")
const app = express()
const port = 4060
let datosHome = [
    {
        categoriaNombre: "Animales",
        categoriaImg: "../../images/Categoria_Animales.jpg",
        datosProductos: [
            {
                id: 1,
                name: "Animal1",
                img: "../../images/producto.jpg",
                price: 20,
            },
            {
                id: 2,
                name: "Animal2",
                img: "../../images/producto.jpg",
                price: 50,
            },
            {
                id: 3,
                name: "Animal3",
                img: "../../images/producto.jpg",
                price: 40,
            },
            {
                id: 4,
                name: "Animal4",
                img: "../../images/producto.jpg",
                price: 80,
            },
        ]
    },
    {
        categoriaNombre: "Paisajes",
        categoriaImg: "../../images/Categoria_Animales.jpg",
        datosProductos: [
            {
                id: 1,
                name: "Paisaje1",
                img: "../../images/producto.jpg",
                price: 10,
            },
            {
                id: 2,
                name: "Paisaje2",
                img: "../../images/producto.jpg",
                price: 120,
            },
            {
                id: 3,
                name: "Paisaje3",
                img: "../../images/producto.jpg",
                price: 160,
            },
            {
                id: 4,
                name: "Paisaje4",
                img: "../../images/producto.jpg",
                price: 200,
            },
        ]
    },
]

app.use(express.static(path.join(__dirname,"../../../public")))

app.listen(port,()=>console.log("El servidor " + port + " se levanto"))

app.get("/", (req, res) => {res.render(path.join(__dirname,"../views/home.ejs"), {datosHome})});

app.get("/register", (req, res) => {res.sendFile(path.join(__dirname,"../views/register.html"))})

app.get("/login", (req, res) => {res.sendFile(path.join(__dirname,"../views/login.html"))})

app.get("/detalle_producto", (req, res) => {res.sendFile(path.join(__dirname,"../views/productDetail.html"))})

app.get("/carrito_de_compra", (req, res) => {res.sendFile(path.join(__dirname,"../views/productCart.html"))})

