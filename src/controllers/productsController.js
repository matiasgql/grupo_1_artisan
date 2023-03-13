const controllerProducts = {
    createProduct: (req,res) =>{
        res.render("createProduct")
    },
    editionProduct: (req,res) =>{
        res.render("editionProduct")
    }
};

module.exports = controllerProducts