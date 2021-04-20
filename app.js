const express = require("express");
const rutes = require("./routes/router");
const cors = require("cors");
const { uploadRoute } = require("./routes/uploadsRute");
//config
const app = express();

//middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
//rutes
app.use("/api", rutes);
app.use("/api/uploads", uploadRoute);
//listen
app.listen(4000, () => console.log("corriendo"));
