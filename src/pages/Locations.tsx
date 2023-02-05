import { useQuery } from "@apollo/client";
import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ILocation } from "../components/CharacterCardComponent";
import { LoadingIcon } from "../components/LoadingIcon";
import { GET_LOCATIONS } from "../services/graphql/queries/getLocations";

export const Locations = () => {
  const [counter, setCounter] = useState(1);
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { page: counter },
  });

  let hasPrev = data?.locations?.info?.prev;
  let hasNext = data?.locations?.info?.next;

  if (loading) return <LoadingIcon />;
  if (error) return <p>Error...</p>;

  return (
    <>
      <Heading as="h2">Lugares</Heading>
      {/*  */}
      <HStack>
        <Button
          onClick={() => setCounter(counter - 1)}
          disabled={hasPrev == null ? true : false}
        >
          Anterior
        </Button>
        <Button
          onClick={() => setCounter(counter + 1)}
          disabled={hasNext ? false : true}
        >
          Próximo
        </Button>
      </HStack>
      ;{/*  */}
      {data?.locations?.results.map(
        ({ id, name, type, dimension }: ILocation) => (
          <Box>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{type}</Text>
            <Text>{dimension}</Text>
          </Box>
        )
      )}
    </>
  );
};
