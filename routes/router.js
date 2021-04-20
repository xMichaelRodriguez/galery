const { Router } = require("express");
const { check } = require("express-validator");
const rutes = Router();
const { validarCampos } = require("../middleware/validationFields");

const {
  newDirectory,
  renameDirectory,
  getDirectoriesAndImages,
  deleteDirectory,
} = require("../controllers/controller");

rutes.get("/", getDirectoriesAndImages);

rutes.post(
  "/new",
  [
    check("directory", "the directori is require").not().isEmpty(),
    validarCampos,
  ],
  newDirectory
);

rutes.put(
  "/rename",
  check("oldDirectory", "the directori is require").notEmpty(),
  check("directory", "the directori is require").notEmpty(),
  renameDirectory
);

rutes.delete(
  "/delete",
  check("directory", "the directori is require").notEmpty(),
  deleteDirectory
);

module.exports = rutes;
