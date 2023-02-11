import { gql } from "@apollo/client";

export const GET_EPISODES_COUNT = gql`
  query getEpisodesCount {
    episodes {
      info {
        count
      }
    }
  }
`;

export const GET_CHARACTERS_COUNT = gql`
  query getCharactersCount {
    characters {
      info {
        count
      }
    }
  }
`;