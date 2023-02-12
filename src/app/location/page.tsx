import { useQuery } from "@apollo/client";
import {
  Center,
  Container,
  Flex,
  Heading,
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
import { GET_LOCATION } from "../../services/graphql/queries/getLocation";
import { IResident } from "./IResident";

const Location = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_LOCATION, {
    variables: { id: id },
  });

  return (
    <>
      {console.log(data?.location)}
      <Container maxW="container.lg">
        <Center>
          <Heading as="h1" marginBottom="4" size="xl">
            Localização
          </Heading>
        </Center>

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
        <Spacer h="4"/>
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
                <Tr>
                  <Td>{id}</Td>
                  <Td>{name}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Location;
