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

const tags = [
  { id: 1, title: "ttt" },
  { id: 2, title: "ttt1" },
  { id: 3, title: "ttt2" },
];

const createWord = (input) => {
  const id = Date.now();
  return {
    id,
    ...input,
  };
};

const createTag = (input) => {
  const id = Date.now();
  return {
    id,
    ...input,
  };
};

const root = {
  getAllWords: () => {
    return words;
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
    return tags;
  },
  createWord: ({ input }) => {
    const word = createWord(input);
    words.push(word);
    return word;
  },
  createTag: ({ input }) => {
    const tag = createTag(input);
    tags.push(tag);
    return tag;
  },
};

module.exports = root;
