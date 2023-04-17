const User = require("../models/users")

function userLogueadiMidlewares(req, res, next) {
    // esto es para preuntar si tenes a alguien en session y para mostrar una parte de la barra de navegacion hacerlo despues
    // y es un middleware de aplicacion 
    res.locals.registrado = false;

    /*let cookieEmail = req.cookies.userEmail;

    let usurioEnCookie = User.buscarPorCampo("email",cookieEmail);

    if (usurioEnCookie) {
        req.session.userLogged = usurioEnCookie
        
    }*/

    if (req.session && req.session.userLogged) {
        res.locals.registrado = true;
        res.locals.user = req.session.userLogged 
        //para poder usarla despues y mostrar diefretes cosas en la vista e imprimirlo donde queramos
    }
    
    //console.log(usurioEnCookie);

    next();
}

module.exports = userLogueadiMidlewares;