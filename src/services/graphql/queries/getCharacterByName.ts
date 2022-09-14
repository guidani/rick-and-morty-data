import { gql } from "@apollo/client";

export const GET_CHARACTER_BY_NAME = gql`
  query getCharacterByName($searchedText: String!) {
    characters(filter: { name: $searchedText }) {
      results {
        id
        name
        image
        status
        species
        gender
        location {
          name
        }
        origin {
          name
        }
      }
    }
  }
`;
