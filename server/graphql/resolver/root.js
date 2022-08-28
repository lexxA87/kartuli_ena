const Word = require("../../models/Word");
const Tag = require("../../models/Tag");

const createWord = async (input) => {
  const word = new Word(input);
  const word_1 = await word.save();
  return word_1;
};

const createTag = async (input) => {
  const tag = new Tag(input);
  const tag_1 = await tag.save();
  return tag_1;
};

const root = {
  getAllWords: () => {
    return Word.find();
  },
  getWordsByTag: ({ id }) => {
    return Word.find({ tags: id });
  },
  getWord: ({ id }) => {
    return Word.findById(id);
  },
  getAllTags: () => {
    return Tag.find();
  },
  createWord: ({ input }) => {
    return createWord(input);
  },
  createTag: ({ input }) => {
    return createTag(input);
  },
};

module.exports = root;
