const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = { // Creamos el controlador
    // C - Create - Crear
    create: (req, res) => {
        return res.render('products/create')
    },
    save: (req,res) => {
        // req.body --> objeto que nos trae el formulario enviado por POST
        let ultimoProducto = products[products.length - 1]
        let nuevoProducto = {
            id: ultimoProducto ? ultimoProducto.id + 1 : 1,
            name : req.body.name,
            price: req.body.price,
        };
        products.push(nuevoProducto)
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2))
        return res.redirec("/products");
    },
    // R - Read - Leer
    list: (req, res) => { // Método para renderizar el listado de productos
        return res.render("products/list",{products :products});
        
    },
    show: (req, res) => { // Método para renderizar el detalle de producto
        let productoEnviar = products.filter(producto => producto.id == req.params.id)[0]
        return res.render("products/detail",{product:productoEnviar});
    },
    // U - Update - Actualizar
    // D - Delete - Eliminar
};

// Exportamos el controlador
module.exports = controller;