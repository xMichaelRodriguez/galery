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

const searchFile = (oldName, newName) => {
  const folder = oldName.split("/")[0];
  const originalOldName = oldName.split("/")[1];
  console.log(folder);

  if (oldName.indexOf("/") >= -1) {
    fs.readdirSync(`${pathResolve}/${folder}`).forEach((img) => {
      if (img === originalOldName) {
        fs.rename(
          `${path.join(pathResolve, folder)}/${originalOldName}`,
          `${path.join(pathResolve, folder)}/${newName}${path.extname(
            oldName
          )}`,
          (err) => {
            console.log("Image renamed");
            console.log(err);
          }
        );
      }
    });
  }

  fs.readdirSync(pathResolve).forEach((file) => {
    if (file === oldName) {
      console.log(oldName);
      fs.rename(
        path.join(pathResolve, oldName),
        path.join(pathResolve, `${newName}${path.extname(oldName)}`),
        () => {
          console.log("ok");
          return "Image Renamed";
        }
      );
    }
  });
};

const renameFile = async (req, res) => {
  const { newName, oldName } = req.body;

  try {
    if (newName && oldName) {
      const resp = await searchFile(oldName, newName);

      if (resp === "Image Renamed") {
        return res.satus(200).json({
          ok: true,
          msg: resp,
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
