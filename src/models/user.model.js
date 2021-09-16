const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const userSchema = new Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    favPalettes: [{ type: mongoose.Types.ObjectId, ref: "palettes" }],
    userPalettes: [{ type: mongoose.Types.ObjectId, ref: "palettes" }],
  },
  { timestamps: true }
);
 
const User = mongoose.model("users", userSchema);
 
module.exports = User;