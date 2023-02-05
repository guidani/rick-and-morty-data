import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query getEpisodes($page: Int) {
    episodes(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        episode
        air_date
        characters {
          id
          name
        }
      }
    }
  }
`;
