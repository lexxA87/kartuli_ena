const mongoose = require("mongoose");
const { Schema, model, ObjectId } = mongoose;

const Image = new Schema({
  image: {
    data: Buffer,
    contentType: String,
  },
  word: { type: ObjectId, ref: "Word" },
});

module.exports = model("Image", Image);
