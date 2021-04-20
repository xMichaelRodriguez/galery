const { response } = require("express");
const fs = require("fs");
const path = require("path");

const pathResolve = path.resolve(process.cwd(), "./uploads");

/**
 *Obtiene todos los directorios
 *@function getDirectoriesAndImages
 *@access public
 *@params(Object)
 * */
const getDirectoriesAndImages = (req, res = response) => {
  try {
    const files = [];
    fs.readdirSync(pathResolve).forEach(async (file) => {
      await files.push(file);
    });
    return res.status(200).json({
      ok: true,
      files,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      ok: false,
      msg: "Algo salio mal",
    });
  }
};

/**
 * Crea un nuevo directorio
 * @function newDirectory
 * @access public
 * @params(Object)
 */
const newDirectory = (req, res = response) => {
  const { directory } = req.body;
  try {
    if (directory) {
      fs.mkdir(
        path.join(pathResolve, directory),
        { recursive: true },
        (err) => {
          if (!err) {
            return res.status(200).json({
              ok: true,
              msg: "Directory created succefully!",
            });
          }
        }
      );
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      ok: false,
      msg: "algo salio mal " + err,
    });
  }
};

/**
 * Renombra un directorio
 *@funciton renameDirectory
 *@access public
 *@params(Objects)
 * */

const renameDirectory = (req, res = response) => {
  const { oldDirectory, directory } = req.body;

  try {
    if (directory) {
      fs.rename(
        path.join(pathResolve, oldDirectory),
        path.join(pathResolve, directory),
        (err) => {
          if (!err) {
            return res.status(200).json({
              ok: true,
              msg: "The directory has been renamed",
            });
          }
        }
      );
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      ok: false,
      msg: "Algo salio mal",
    });
  }
};

/**
 *Elimina un directorio enviado del frontEnd
 *@function deleteDirectory
 *@access public
 *@params(Objects)
 */

const deleteDirectory = (req, res = response) => {
  const { directory } = req.body;

  try {
    if (directory) {
      fs.rmdir(
        path.join(pathResolve, directory),
        {
          recursive: true,
        },
        (error) => {
          if (!error) {
            console.log("Recursive: Directories Deleted!");
            return res.status(200).json({
              ok: true,
              msg: "Recursive:Drectories Deleted!",
            });
          }
        }
      );
    }
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      ok: false,
      msg: "algo salio mal",
    });
  }
};

module.exports = {
  getDirectoriesAndImages,
  newDirectory,
  renameDirectory,
  deleteDirectory,
};
