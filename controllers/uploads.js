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
    console.log(err);
    return res.status(400).json({
      ok: false,
      msg: "something went wrong",
    });
  }
};

module.exports = {
  upload,
};
