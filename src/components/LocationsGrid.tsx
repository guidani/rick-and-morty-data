import { useQuery } from "@apollo/client";
import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GET_LOCATIONS } from "../services/graphql/queries/getLocations";
import { ILocation } from "./ILocation";
import { LoadingIcon } from "./LoadingIcon";
import { Pagination } from "./Pagination";

export const LocationsGrid = () => {
  const [counter, setCounter] = useState(1);
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { page: counter },
  });

  if (loading) return <LoadingIcon />;
  if (error) return <p>Error...</p>;
  return (
    <>
      <Pagination onClick={setCounter} data={data?.locations?.info} />

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
