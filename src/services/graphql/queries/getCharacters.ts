import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query getCharacters {
    characters(page: 1) {
      results {
        id
        name
        status
        image
      }
    }
  }
`;
