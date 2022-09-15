import { gql } from "@apollo/client";

export const GET_CHARACTER_BY_NAME = gql`
  query getCharacterByName($name: String!, $page: Int) {
    characters(filter: { name: $name }, page: $page) {
      info {
        count
        pages
        next
        prev
      }
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
