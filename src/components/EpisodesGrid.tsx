import { useQuery } from "@apollo/client";
import {
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { GET_EPISODES } from "../services/graphql/queries/getEpisodes";
import { ErrorWidget } from "./ErrorWidget";
import { IEpisode } from "./IEpisode";
import { LoadingIcon } from "./LoadingIcon";
import { NotFound } from "./NotFound";
import { Pagination } from "./Pagination";

export const EpisodesGrid = () => {
  const [counter, setCounter] = useState(1);
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: counter },
  });

  if (loading) return <LoadingIcon />;
  if (error) return <ErrorWidget/>;
  return (
    <>
      <Pagination onClick={setCounter} data={data?.episodes?.info} />

      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Episódio</Th>
              <Th>Nome</Th>
              <Th>Lançamento</Th>
              <Th>Personagens</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.episodes?.results.map(
              ({ id, name, episode, air_date }: IEpisode) => (
                <Tr>
                  <Td>{id}</Td>
                  <Td>{episode}</Td>
                  <Td>{name}</Td>
                  <Td>{air_date}</Td>
                  <Td>
                    <HStack>
                      <p>Ver</p> <FiExternalLink />
                    </HStack>
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
