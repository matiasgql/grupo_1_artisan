const path = require("path")
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname,"../public")));

app.listen(port,()=>console.log("El servidor " + port + " se levanto"));

app.set("views",path.resolve(__dirname,"./views"));

app.set("view engine","ejs");

app.use(require("./routes/main"));






