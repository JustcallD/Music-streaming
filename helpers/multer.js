// const multer = require("multer");

// const storage = multer.memoryStorage({});

// const upload = multer({ storage }).single("file");

// module.exports = upload;

const multer = require("multer");
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage,
});
module.exports = upload;
