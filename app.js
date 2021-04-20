const express = require("express");
const multer = require("multer");
const rutes = require("./routes/router");

//config
const app = express();

//middleware
app.use(express.json());

//rutes
app.use("/api", rutes);

//listen
app.listen(4000, () => console.log("corriendo"));
