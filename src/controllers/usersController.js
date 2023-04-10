// controladores para usarios
const Users = require("../models/users")

const controllerUsers ={
    login: (req,res) => {
        res.render("users/login")
    },
    procesoDeLogin:(req,res)=>{
        let usuarioParaLoguear = Users.findByField("email",req.body.email);

        if(usuarioParaLoguear){
            //completar con lo que falta para la validacion   
        }
        return res.render("users/login",{
            errors:{
                email:{
                    msg: "no esta registrado "
                }
            }
        })
    },
    register: (req,res) => {
        res.render("users/register")
    },
    procesoDeRegistro:(req,res) =>{
        let usarioParaRegistrarm = Users.crear(req.body,req.file)
        return res.redirect("/users/login")
        
    }
}

module.exports = controllerUsers