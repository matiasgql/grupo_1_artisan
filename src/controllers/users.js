// controladores para usarios
const controllerUsers ={
    login: (req,res) => {
        res.render("login")
    },
    register: (req,res) => {
        res.render("register")
    }
}

module.exports = controllerUsers