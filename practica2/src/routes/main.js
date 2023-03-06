const express = require("express");
const router = express.Router();
const controller = require("../controllers/main");

router.get("/", controller.index);

router.get("/detalle/:id", controller.detalle);

module.exports = router