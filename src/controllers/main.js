// cree controladores para cada pagina y la exporte para llmarla de las rutas 
const controller ={
    home: (req,res) =>{
        res.render("home")
    },
    login: (req,res) => {
        res.render("login")
    },
    productCart: (req,res) => {
        res.render("productCart")
    },
    productDetail: (req,res) => {
        res.render("productDetail")
    },
    register: (req,res) => {
        res.render("register")
    }
}

module.exports = controller