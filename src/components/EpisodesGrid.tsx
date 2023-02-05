import { useQuery } from "@apollo/client";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GET_EPISODES } from "../services/graphql/queries/getEpisodes";
import { IEpisode } from "./IEpisode";
import { LoadingIcon } from "./LoadingIcon";

export const EpisodesGrid = () => {
  const [counter, setCounter] = useState(1);
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: counter },
  });

  let hasPrev = data?.episodes?.info?.prev;
  let hasNext = data?.episodes?.info?.next;

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

      {data?.episodes?.results.map(
        ({ id, name, episode, air_date }: IEpisode) => (
          <Box>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{episode}</Text>
            <Text>{air_date}</Text>
          </Box>
        )
      )}
    </>
  );
};
