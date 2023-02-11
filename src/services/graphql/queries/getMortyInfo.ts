import { gql } from "@apollo/client";

export const GET_MORTYS = gql`
  query getMortys {
    characters(filter: { name: "morty" }) {
      info {
        count
      }
    }
  }
`;

export const GET_ALIVE_MORTYS = gql`
  query getAliveMortys {
    characters(filter: { name: "morty", status: "alive" }) {
      info {
        count
      }
    }
  }
`;

export const GET_DEAD_MORTYS = gql`
  query getDeadMortys {
    characters(filter: { name: "morty", status: "dead" }) {
      info {
        count
      }
    }
  }
`;
export const GET_UNKNOW_MORTYS = gql`
  query getUnknowMortys {
    characters(filter: { name: "morty", status: "unknow" }) {
      info {
        count
      }
    }
  }
`;
