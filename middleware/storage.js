const fs = require("fs");
const path = require("path");
const multer = require("multer");

pathResolve = path.resolve(process.cwd(), "./uploads");

const storage = multer.diskStorage({
  destination: pathResolve,
  filename: (req, file, cb) => {
    const { directory } = req.query;

    if (directory) {
      fs.readdirSync(pathResolve).forEach(async (f) => {
        if (directory === f) {
          const cb2 = await cb(
            null,

            `${directory}/${file.fieldname}__${Date.now()}${path.extname(
              file.originalname
            )}`
          );
        }
      });
    } else {
      cb(
        null,
        `${file.fieldname}__${Date.now()}${path.extname(file.originalname)}}`
      );
    }
  },
});

const upload = multer({
  storage,
});

exports.uploadImage = upload;
