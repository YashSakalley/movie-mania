var mongoose = require("mongoose");

var movieSchema = new mongoose.Schema({
  name: String,
  comments: [String]
});

module.exports = mongoose.model("movie", movieSchema);
