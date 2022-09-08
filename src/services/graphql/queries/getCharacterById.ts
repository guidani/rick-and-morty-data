import { gql } from "@apollo/client";

export const GET_CHARACTER_BY_ID = gql`
  query getCharacterById {
    character(id: 1) {
      id
      name
      status
      image
    }
  }
`;
