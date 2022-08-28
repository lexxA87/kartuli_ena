const mongoose = require("mongoose");
const { Schema, model, ObjectId } = mongoose;

const Word = new Schema({
  ka: { type: String, required: true, unique: true },
  ru: { type: String, required: true },
  en: String,
  description: String,
  role: {
    type: String,
    enum: ["noun", "adjective", "verb", "other"],
    default: "other",
  },
  examples: [{ type: String }],
  image: { type: ObjectId, ref: "Image" },
  tags: [{ type: ObjectId, ref: "Tag" }],
});

Word.index({ "$**": "text" });

module.exports = model("Word", Word);
