import { gql } from "@apollo/client";

export const GET_CHARACTER_BY_NAME = gql`
  query getCharacterByName($name: String!) {
    characters(filter: { name: $name }) {
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
