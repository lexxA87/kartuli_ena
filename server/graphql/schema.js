const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Word {
        id: ID
        ka: String
        ru: String
        en: String
        role: String
        description: String
        examples: [String]
        imageUrl: String
        tags: [Tag]
    }
    type Tag {
        id: ID
        title: String
    }
    input WordInput {
        id: ID
        ka: String!
        ru: String!
        en: String
        role: String
        description: String
        examples: [String]
        imageUrl: String
        tags: [TagInput]
    }
    input TagInput {
        id: ID
        title: String!
    }

    type Query {
        getAllWords: [Word]
        getWord(id: ID): Word
        getAllTags: [Tag]
        getWordsByTag(id: ID): [Word]
    }

    type Mutation {
        createWord(input: WordInput): Word
        createTag(input: TagInput): Tag
        deleteTag(id: ID): Tag
        deleteWord(id: ID): Word
    }
`);

module.exports = schema;
