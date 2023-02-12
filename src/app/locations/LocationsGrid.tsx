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
import { Link } from "react-router-dom";
import { ErrorWidget } from "../../components/UI/ErrorWidget";
import { Pagination } from "../../components/UI/Pagination";
import { TableSkeleton } from "../../components/UI/TableSkeleton";
import { GET_LOCATIONS } from "../../services/graphql/queries/getLocations";
import { ILocation } from "./ILocation";

export const LocationsGrid = () => {
  const [counter, setCounter] = useState(1);
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { page: counter },
  });

  if (loading) return <TableSkeleton />;
  if (error) return <ErrorWidget />;
  return (
    <>
      <Pagination onClick={setCounter} data={data?.locations?.info} />

      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>Tipo</Th>
              <Th>Dimensão</Th>
              <Th>Residentes</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.locations?.results.map(
              ({ id, name, type, dimension }: ILocation) => (
                <Tr>
                  <Td>{id}</Td>
                  <Td>{name}</Td>
                  <Td>{type}</Td>
                  <Td>{dimension}</Td>
                  <Td>
                    <HStack>
                      <p>Ver</p> 
                      <Link to={`/location/${id}`}><FiExternalLink /></Link>
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
