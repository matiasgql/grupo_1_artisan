const controller = { // Creamos el controlador
    index: (req, res) => { // Método para renderizar la página principal
        return res.render("home");
    },
    cart: (req, res) => { // Método para renderizar el carrito de compras
        return res.render("cart");
    },
    login: (req, res) => { // Método para renderizar el login
        return res.render("login");
    },
    register: (req, res) => { // Método para renderizar el registro
        return res.render("register");
    }
};

// Exportamos el controlador
module.exports = controller;