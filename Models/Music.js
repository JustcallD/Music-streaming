// const mongoose = require("mongoose");

// const musicSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   url: {
//     type: String,
//     required: true,
//   },
//   public_id: {
//     type: String,
//     // required: true,
//   },
// });

// module.exports = mongoose.model("Music", musicSchema);

const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  public_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Music", musicSchema);
