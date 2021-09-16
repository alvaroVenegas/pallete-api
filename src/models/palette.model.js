const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const paletteSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    colors: [{ type: Schema.Types.ObjectId, ref: "colors" }],
    author: { type: Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);
 
const Palette = mongoose.model("palettes", paletteSchema);
 
module.exports = Palette;