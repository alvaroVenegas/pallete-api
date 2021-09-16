const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const colorSchema = new Schema(
  {
    hex: { type: String, required: true },
    name: { type: String },
    rgb: { type: String },
  },
  { timestamps: true }
);
 
const Color = mongoose.model("colors", colorSchema);
 
module.exports = Color;