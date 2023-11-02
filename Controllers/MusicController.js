const Music = require("../Models/Music");
const uploadFileToCloudinary = require("../helpers/Cloudinery");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const uploadFile = async (req, res) => {
  try {
    if (!req.file || !req.body.title) {
      return res.status(400).json({ message: "Title and file are required." });
    }

    const { title } = req.body;
    console.log("title", title);
    const { path } = req.file;
    console.log("file", path);
    const cloudinaryResult = await uploadFileToCloudinary(path);
    console.log("path", cloudinaryResult);

    const musicFile = new Music({
      title: title,
      url: cloudinaryResult.secure_url,
      public_id: cloudinaryResult.public_id,
    });
    // console.log("musicFile data", musicFile);
    await musicFile.save();

    res.status(201).json({
      filename: musicFile.title,
      cloudinaryUrl: musicFile.url,
    });
  } catch (error) {
    console.error("Upload error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getAllMusic = async (req, res) => {
  try {
    const totalAudio = await Music.find({});
    res.status(200).json(totalAudio);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get tasks." });
  }
};
const getMusicById = async (req, res) => {
  const songID = req.params.id;
  const songById = await Music.findById(songID);

  const songFileUrl = cloudinary.url(songById.public_id, {
    resource_type: "video",
    format: "mp3",
    type: "stream",
  });

  const fileStream = fs.createReadStream(songFileUrl);

  res.setHeader("Content-Type", "audio/mp3");
  fileStream.pipe(res);

  fileStream.on("error", (err) => {
    res.status(500).send("Error reading song file.");
  });
};

module.exports = { uploadFile, getAllMusic, getMusicById };
