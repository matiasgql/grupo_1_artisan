// controladores para usarios
const Users = require("../models/users")
const bcryptjs = require("bcryptjs")


const controllerUsers = {
    login: (req, res) => {
        res.render("users/login")
    },
    procesoDeLogin: (req, res) => {
        // se buscar por campo el email
        let usuarioParaLoguear = Users.buscarPorCampo("email", req.body.email);
        //aca validamos si el email coicide con el registrado 
        if (usuarioParaLoguear) {
            //comparamos la contraseña registrada con la ingresada quellega del body
            let claveCorrecta = bcryptjs.compareSync(req.body.clave, usuarioParaLoguear.clave)
            // se valida
            if (claveCorrecta) {
                //eliminamos la clave aca para dejar en session
                delete usuarioParaLoguear.clave
                //logueamos al usuario
                req.session.userLogged = usuarioParaLoguear;
                // si coincide todo lo redirigimos al perfil
                return res.redirect("/")
            } else {
                //si no a la vista register para que se registre
                return res.redirect("users/register")
            }
        }
    },
    register: (req, res) => {
        //cokie para guardar al usuario recibe algo para guardar,un nombre y la cantidad de duracion
        //res.cookie("", "", { maxAge: 1000 * 60 })
        res.render("users/register")
    },
    procesoDeRegistro: (req, res) => {
        // creamos aca el ususario
        let usarioParaRegistrar = Users.crear(req.body, req.file)
        if (usarioParaRegistrar) {
            return res.redirect("/users/login")
        }
    },
    perfil: (req, res) => {
        //corregir errores por que no me toma la variable user para mostrar las propiedades
        //console.log( req.session.userLogged)
        res.render("users/perfil"), {
            user: req.session.userLogged
        }
    },
    editarUsuario: (req, res) => {
        //**pedir al profe para que me ayude a hacerlo**
        res.render("users/editarUsuario")
    },
    cerrarSersion: (req, res) => {
        //este metodo borra todo lo que este en session
        req.session.destroy()
        // esto redirige a la pagina de inicio (home)
        return res.redirect("/")
        //hacer una pestañitar para cerrar sesion
    }
}

module.exports = controllerUsers

