const Word = require("../../models/Word");
const Tag = require("../../models/Tag");

const handleError = (res, error) => {
  res.status(500).send(error.message);
};

const getAllWords = (req, res) => {
  Word.find()
    .then((tags) => res.status(200).json(tags))
    .catch((error) => handleError(res, error));
};

const getTags = (req, res) => {
  Tag.find()
    .then((tags) => res.status(200).json(tags))
    .catch((error) => handleError(res, error));
};

const getTagsForCloud = (req, res) => {
  const { limit } = req.query;
  Tag.find()
    .limit(limit)
    .then((tags) => res.status(200).json(tags))
    .catch((error) => handleError(res, error));
};

const postTag = (req, res) => {
  const { title } = req.body;

  const comment = new Tag({
    title,
  });
  comment
    .save()
    .then((tag) => res.status(200).json(tag))
    .catch((error) => handleError(res, error));
};

const words = [
  {
    id: 1,
    ka: "www",
    ru: "rrr",
    tags: [
      { id: 1, title: "ttt" },
      { id: 2, title: "ttt1" },
    ],
  },
  {
    id: 2,
    ka: "qqq",
    ru: "eee",
    tags: [
      { id: 1, title: "ttt" },
      { id: 2, title: "ttt1" },
    ],
  },
  {
    id: 3,
    ka: "aaa",
    ru: "rrr",
    tags: [
      { id: 2, title: "ttt1" },
      { id: 3, title: "ttt2" },
    ],
  },
];

const createWord = async (input) => {
  const word = new Word(input);
  const word_1 = await word.save();
  return word_1;
};

const createTag = (input) => {
  const tag = new Tag(input);
  return tag.save().then((tag) => tag);
};

const root = {
  getAllWords: () => {
    return Word.find();
  },
  getWordsByTag: ({ id }) => {
    const ar = words.filter((word) => {
      const arid = word.tags.filter((tag) => {
        return tag.id == id;
      });
      if (arid.length > 0) return word;
    });
    return ar;
  },
  getWord: ({ id }) => {
    return words.find((word) => word.id == id);
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
