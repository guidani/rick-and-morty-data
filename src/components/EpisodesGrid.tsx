import { useQuery } from "@apollo/client";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GET_EPISODES } from "../services/graphql/queries/getEpisodes";
import { IEpisode } from "./IEpisode";
import { LoadingIcon } from "./LoadingIcon";
import { Pagination } from "./Pagination";

export const EpisodesGrid = () => {
  const [counter, setCounter] = useState(1);
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: counter },
  });

  if (loading) return <LoadingIcon />;
  if (error) return <p>Error...</p>;
  return (
    <>
      <Pagination onClick={setCounter} data={data?.episodes?.info} />

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
