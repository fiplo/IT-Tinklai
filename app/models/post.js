var mongoose = require("mongoose");

var postSchema = mongoose.Schema({
  images: {
    path1: String,
    path2: String,
    path3: String,
    path4: String
  },
  desc: String,
  until: Date,
  contact: String
});

module.exports = mongoose.model("Posts", postSchema);
