import { gql } from "@apollo/client";

export const GET_LOCATION = gql`
  query getLocation($id: ID!) {
    location(id: $id) {
      id
      name
      dimension
      type
      residents {
        id
        name
      }
    }
  }
`;
