import { useQuery } from "@apollo/client";
import { Box, Center, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { GET_LOCATION } from "../../services/graphql/queries/getLocation";

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

        <Flex justify='space-between'>
          <Text>Nome: </Text>
          <Text>{data?.location.name}</Text>
        </Flex>
        <Flex justify='space-between'>
          <Text>Dimensão: </Text>
          <Text>{data?.location.dimension}</Text>
        </Flex>
        <Flex justify='space-between'>
          <Text>Tipo: </Text>
          <Text>{data?.location.type}</Text>
        </Flex>
        
      </Container>
    </>
  );
};

export default Location;
