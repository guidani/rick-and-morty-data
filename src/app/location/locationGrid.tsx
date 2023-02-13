import { useQuery } from "@apollo/client";
import {
  Container,
  Flex,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ErrorWidget } from "../../components/UI/ErrorWidget";
import { TableSkeleton } from "../../components/UI/TableSkeleton";
import { GET_LOCATION } from "../../services/graphql/queries/getLocation";
import { IResident } from "./IResident";

export const LocationGrid = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_LOCATION, {
    variables: { id: id },
  });

  if (loading)
    return (
      <Container maxW="container.lg">
        <TableSkeleton />
      </Container>
    );
  if (error) return <ErrorWidget />;
  return (
    <>
      <Flex justify="space-between">
        <Text>Nome: </Text>
        <Text>{data?.location.name}</Text>
      </Flex>
      <Flex justify="space-between">
        <Text>Dimensão: </Text>
        <Text>{data?.location.dimension}</Text>
      </Flex>
      <Flex justify="space-between">
        <Text>Tipo: </Text>
        <Text>{data?.location.type}</Text>
      </Flex>
      <Spacer h="4" />
      <h2>Habitantes</h2>
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nome</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.location?.residents.map(({ id, name }: IResident) => (
              <Tr key={id}>
                <Td>{id}</Td>
                <Td>{name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
