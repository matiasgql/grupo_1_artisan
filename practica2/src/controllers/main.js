let controller = {};

let platos = [];

platos.push({
    id: 1,
    nombre: "Carpaccio fresco",
    descripcion: "Entrada Carpaccio de salmón con cítricos",
    precio: "U$S 65.50",
    imagen: "Carpaccio-de-salmon.jpg"
})

platos.push({
    id: 2,
    nombre: "Risotto de berenjena",
    descripcion: "Risotto de berenjena y queso de cabra",
    precio: "U$S 47.00",
    imagen: "Risotto-berenjena-queso-cabra.jpg"
})

platos.push({
    id: 3,
    nombre: "Mousse de arroz",
    descripcion: "Mousse de arroz con leche y aroma de azahar",
    precio: "U$S 27.50",
    imagen: "Mousse-de-arroz-con-leche.jpg"
})

platos.push({
    id: 4,
    nombre: "Espárragos blancos",
    descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio: "U$S 37.50",
    imagen: "esparragos.png"
})

controller.index = (req, res) => {
    return res.render("index", { platos });

};
controller.detalle = (req, res) => {
    const params = req.params;
    const { id } = params
    return res.render("detalleMenu", { id })
};

module.exports = controller;