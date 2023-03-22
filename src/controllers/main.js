// cree controladores para cada pagina y la exporte para llmarla de las rutas

let datosHome = [
    {
        categoriaNombre: "Animales",
        categoriaImg: "Categoria_Animales.jpeg",
        datosProductos: [
            {
                id: 1,
                name: "Animal1",
                img: "producto.png",
                price: 20,
            },
            {
                id: 2,
                name: "Animal2",
                img: "producto.png",
                price: 50,
            },
            {
                id: 3,
                name: "Animal3",
                img: "producto.png",
                price: 40,
            },
            {
                id: 4,
                name: "Animal4",
                img: "producto.png",
                price: 80,
            },
        ]
    },
    {
        categoriaNombre: "Paisajes",
        categoriaImg: "Categoria_Animales.jpeg",
        datosProductos: [
            {
                id: 1,
                name: "Paisaje1",
                img: "producto.png",
                price: 10,
            },
            {
                id: 2,
                name: "Paisaje2",
                img: "producto.png",
                price: 120,
            },
            {
                id: 3,
                name: "Paisaje3",
                img: "producto.png",
                price: 160,
            },
            {
                id: 4,
                name: "Paisaje4",
                img: "producto.png",
                price: 200,
            },
        ]
    },
]

const controllerMain ={
    home: (req,res,) =>{
        res.render("home",{datosHome})
    },
    productCart: (req,res) => {
        res.render("productCart")
    },
    productDetail: (req,res) => {
        res.render("productDetail")
    },
}

module.exports = controllerMain