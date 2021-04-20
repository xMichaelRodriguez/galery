/*
 *  /api/uploads/
 */

const { Router } = require("express");
const multer = require("multer");
const { check } = require("express-validator");
const { upload, renameFile } = require("../controllers/uploads");
const { validarCampos } = require("../middleware/validationFields");
const { uploadImage } = require("../middleware/storage");
//init routes
const rutes = Router();

rutes.post("/", uploadImage.array("image", 5), upload);
rutes.put(
  "/rename",
  [
    check("oldName", "The old name of file is required").notEmpty(),
    check("newName", "The new name of file is required").notEmpty(),
    validarCampos,
  ],
  renameFile
);

exports.uploadRoute = rutes;
