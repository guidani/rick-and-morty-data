import { useQuery } from "@apollo/client";
import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { IEpisode } from "../components/IEpisode";
import { LoadingIcon } from "../components/LoadingIcon";
import { GET_EPISODES } from "../services/graphql/queries/getEpisodes";

export const Episodes = () => {
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
      <Heading as="h2">Episodes</Heading>
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
