const { Router } = require("express");
const app = Router();
const controllerUsers = require("../controllers/usersController");
const multer = require("multer")
const path = require("path")

//proceso de multer aca 
//variable de multer }

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/users"))
    },
    filename: (req, file, cb) => {
        const newFileName = "imagen de perfil" + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
})

const upload = multer({ storage })


//rutas de login y register llamadas desde su controlador
app.get("/login", controllerUsers.login);
//proceso de login
app.post("/login", controllerUsers.procesoDeLogin)

app.get("/register", controllerUsers.register);

app.post("/register", upload.single("imagen-usuario"), controllerUsers.procesoDeRegistro);
//archivoParaSubir.single("imagen-usuario")*/


module.exports = app