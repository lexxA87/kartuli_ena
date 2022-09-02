import { gql } from "@apollo/client";

export const GET_ALL_TAGS = gql`
  query {
    tags: getAllTags {
      id
      title
    }
  }
`;

export const CREATE_TAG = gql`
  mutation createTag($input: TagInput) {
    createTag(input: $input) {
      title
    }
  }
`;

export const DELETE_TAG = gql`
  mutation deleteTag($id: ID) {
    deleteTag(id: $id) {
      id
    }
  }
`;
