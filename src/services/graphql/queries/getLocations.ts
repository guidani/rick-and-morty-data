import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query getLocations($page: Int) {
    locations(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;
