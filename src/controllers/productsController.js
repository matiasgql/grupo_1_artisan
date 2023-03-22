const controllerProducts = {
    // falta implementa las rutas aca y configurar crear productos y el editar productos e implementar en sus respectivas paginas
    createProduct: (req,res) =>{
        res.render("createProduct")
    },
    editionProduct: (req,res) =>{
        res.render("editionProduct")

    }
    
};

module.exports = controllerProducts