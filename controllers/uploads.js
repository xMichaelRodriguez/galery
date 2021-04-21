const path = require("path");
const fs = require("fs");

const pathResolve = path.resolve(process.cwd(), "./uploads");

const upload = async (req, res) => {
  const path = req.files;

  try {
    if (req.files) {
      return res.status(200).json({
        ok: true,
        msg: "image saved",
      });
    }
  } catch (err) {
    console.log("Error: ", err);
    return res.status(400).json({
      ok: false,
      msg: "something went wrong",
    });
  }
};

//Renombra un archivo dentro de un directorio
const renameOfFolder = async (oldName, newName) => {
  let result = [];
  const folder = oldName.split("/")[0];
  const originalOldName = oldName.split("/")[1];
  console.log("rename folder");
  fs.readdirSync(`${pathResolve}/${folder}`).forEach((img) => {
    if (img === originalOldName) {
      fs.rename(
        `${path.join(pathResolve, folder)}/${originalOldName}`,
        `${path.join(pathResolve, folder)}/${newName}${path.extname(oldName)}`,
        (err) => {
          console.log(err);
          if (err) {
            result.push(err);
          }
        }
      );
    }
  });
  return await result;
};

//Renombra archivo
const renameOnlyFile = async (oldName, newName) => {
  let result = [];

  fs.readdirSync(pathResolve).forEach((file) => {
    if (file === oldName) {
      const pathResult = path.resolve(
        path.join(pathResolve, `${newName}${path.extname(oldName)}`)
      );

      fs.rename(path.join(pathResolve, oldName), pathResult, (err) => {
        if (err) {
          result.push(err);
        }
      });
    }
  });
  return await result;
};

//Busca un "/" en el oldName para decidir si renombrara un folder o archivo
const searchFile = async (oldName, newName) => {
  if (oldName.indexOf("/") > 0) {
    return await renameOfFolder(oldName, newName);
  } else {
    return await renameOnlyFile(oldName, newName);
  }
};

//El proceso cuando se llama en la solicitud
const renameFile = async (req, res) => {
  const { newName, oldName } = req.body;

  try {
    if (newName && oldName) {
      const resp = await searchFile(oldName, newName);

      if (resp !== "") {
        return res.status(200).json({
          ok: true,
          msg: "Image Renamed",
        });
      } else {
        return res.status(400).json({
          ok: false,
          msg: resp,
        });
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      ok: false,
      msg: err,
    });
  }
};

module.exports = {
  upload,
  renameFile,
};
