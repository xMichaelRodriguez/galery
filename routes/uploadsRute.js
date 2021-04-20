/*
 *  /api/uploads/
 */

const { Router } = require("express");
const multer = require("multer");
const { upload } = require("../controllers/uploads");
const { uploadImage } = require("../middleware/storage");
//init routes
const rutes = Router();

rutes.post("/", uploadImage.array("image", 5), upload);

exports.uploadRoute = rutes;
