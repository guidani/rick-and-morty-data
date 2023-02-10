import { gql } from "@apollo/client";

export const GET_RICKS = gql`
  query getRicks {
    characters(filter: { name: "rick" }) {
      info {
        count
      }
    }
  }
`;

export const GET_ALIVE_RICKS = gql`
  query getAliveRicks {
    characters(filter: { name: "rick", status: "alive" }) {
      info {
        count
      }
    }
  }
`;

export const GET_DEAD_RICKS = gql`
  query getDeadRicks {
    characters(filter: { name: "rick", status: "dead" }) {
      info {
        count
      }
    }
  }
`;
export const GET_UNKNOW_RICKS = gql`
  query getUnknowRicks {
    characters(filter: { name: "rick", status: "unknow" }) {
      info {
        count
      }
    }
  }
`;