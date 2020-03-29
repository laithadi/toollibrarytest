const mongoose = require("mongoose");

// creating new schema for mytools to have a separate collection in the database for tools checkout by the user
const Schema = mongoose.Schema;

const myToolsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  availability: { type: String, required: true },
  // again the image not required just because i cant seem to get the images to actually show
  image: { type: String }
});

// export schema to use for document creation and stuff
module.exports = mongoose.model("MyTool", myToolsSchema);
