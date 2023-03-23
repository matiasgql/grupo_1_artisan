const e = require('express');
let fs = require('fs');
let datosHome = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'));
let datos = []

datosHome.forEach(dato => {
    dato.datosProductos.forEach(producto => {
        datos.push(producto);
    })
})

const controllerProducts = {
    // falta implementa las rutas aca y configurar crear productos y el editar productos e implementar en sus respectivas paginas
    createProduct: (req,res) =>{
        res.render("product/createProduct")
    },
    editionProduct: (req,res) =>{
        res.render("product/editionProduct")

    },
    productCart: (req,res) => {
        res.render("product/productCart")
    },
    productDetail: (req,res) => {
        res.render("product/productDetail", {datoProducto: datos.filter(e => e.id == req.params.id)[0]})
    },
    
};

module.exports = controllerProducts

