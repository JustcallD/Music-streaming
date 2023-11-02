// const express = require("express");
// const uploadFile = require("../Controllers/MusicController");
// const upload = require("../helpers/multer");

// const musicRouter = express.Router();

// musicRouter.get();
// musicRouter.post("/upload", upload, uploadFile);

// module.exports = musicRouter;

const express = require("express");
const {
  uploadFile,
  getAllMusic,
  getMusicById,
} = require("../Controllers/MusicController");
const upload = require("../helpers/multer");

const musicRouter = express.Router();

// Define a route for uploading music files
musicRouter.post("/upload", upload.single("audio"), uploadFile);
musicRouter.get("/music", getAllMusic);
musicRouter.get("/music/:id", getMusicById);

module.exports = musicRouter;
