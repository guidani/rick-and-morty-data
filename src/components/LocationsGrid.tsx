import { useQuery } from "@apollo/client";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GET_LOCATIONS } from "../services/graphql/queries/getLocations";
import { ILocation } from "./ILocation";
import { LoadingIcon } from "./LoadingIcon";

export const LocationsGrid = () => {
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
