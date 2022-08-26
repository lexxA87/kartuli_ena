const mongoose = require("mongoose");
const { Schema, model, ObjectId } = mongoose;

const Word = new Schema({
  ka: { type: String, required: true },
  ru: { type: String, required: true },
  en: String,
  examples: [{ type: String }],
  image: { type: ObjectId, ref: "Image" },
  tags: [{ type: ObjectId, ref: "Tag" }],
});

Word.index({ "$**": "text" });

module.exports = model("Word", Word);
