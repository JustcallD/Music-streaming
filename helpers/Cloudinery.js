const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFile = async (path) => {
  try {
    const result = await cloudinary.uploader.upload(path, {
      folder: "music",
      resource_type: "video",
    });
    // console.log("cloudinary result", result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = uploadFile;
