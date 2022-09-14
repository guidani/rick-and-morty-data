import { gql } from "@apollo/client";

export const GET_PAGE_INFO = gql`
  query getPageInfo($page: Int) {
    characters(page: $page) {
      info{
        count
        pages
        next
        prev
      }
    }
  }
`;
