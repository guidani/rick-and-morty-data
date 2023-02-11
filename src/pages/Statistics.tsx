import { useQuery } from "@apollo/client";
import {
  Center,
  Container,
  Divider,
  Heading,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { CustomStat } from "../components/CustomStat";
import {
  GET_ALIVE_MORTYS,
  GET_DEAD_MORTYS,
  GET_MORTYS,
  GET_UNKNOW_MORTYS,
} from "../services/graphql/queries/getMortyInfo";
import {
  GET_ALIVE_RICKS,
  GET_DEAD_RICKS,
  GET_RICKS,
  GET_UNKNOW_RICKS,
} from "../services/graphql/queries/getRickInfo";
import {
  GET_CHARACTERS_COUNT,
  GET_EPISODES_COUNT,
} from "../services/graphql/queries/getShowInfo";

export const Statistics = () => {
  const rickData = useQuery(GET_RICKS);
  const aliveRickData = useQuery(GET_ALIVE_RICKS);
  const deadRickData = useQuery(GET_DEAD_RICKS);
  const unknowRickData = useQuery(GET_UNKNOW_RICKS);
  const mortyData = useQuery(GET_MORTYS);
  const aliveMortyData = useQuery(GET_ALIVE_MORTYS);
  const deadMortyData = useQuery(GET_DEAD_MORTYS);
  const unknowMortyData = useQuery(GET_UNKNOW_MORTYS);
  const episodesCount = useQuery(GET_EPISODES_COUNT);
  const charactersCount = useQuery(GET_CHARACTERS_COUNT);

  return (
    <>
      <Container maxW="container.lg" h="100vh">
        <Center>
          <Heading as="h1" marginBottom="4" size="xl">
            Estatísticas
          </Heading>
        </Center>
        <Heading as="h2">Informações sobre o Rick</Heading>
        <Wrap spacing="4" w="100%">
          <WrapItem>
            <CustomStat
              label="Total de Ricks até o momento"
              data={rickData?.data?.characters.info?.count}
            />
          </WrapItem>
          <WrapItem>
            <CustomStat
              label="Ricks vivos"
              data={aliveRickData?.data?.characters.info?.count}
            />
          </WrapItem>
          <WrapItem>
            <CustomStat
              label="Ricks mortos"
              data={deadRickData?.data?.characters.info?.count}
            />
          </WrapItem>
          <WrapItem>
            <CustomStat
              label="Ricks com paradeiro desconhecido"
              data={unknowRickData?.data?.characters.info?.count}
            />
          </WrapItem>
        </Wrap>
        <Divider m="4" />
        <Heading as="h2">Informação sobre o Morty</Heading>
        <Wrap>
          <WrapItem>
            <CustomStat
              label="Total de Mortys até o momento"
              data={mortyData?.data?.characters.info?.count}
            />
          </WrapItem>
          <WrapItem>
            <CustomStat
              label="Mortys vivos"
              data={aliveMortyData?.data?.characters.info?.count}
            />
          </WrapItem>
          <WrapItem>
            <CustomStat
              label="Morty mortos"
              data={deadMortyData?.data?.characters.info?.count}
            />
          </WrapItem>
          <WrapItem>
            <CustomStat
              label="Ricks com paradeiro desconhecido"
              data={unknowMortyData?.data?.characters.info?.count}
            />
          </WrapItem>
        </Wrap>
        <Divider m="4" />
        <Heading as="h2">Informações sobre o show</Heading>
        <Wrap>
          <WrapItem>
            <CustomStat
              label="Total de episódios"
              data={episodesCount?.data?.episodes.info?.count}
            />
          </WrapItem>
          <WrapItem>
            <CustomStat
              label="Total de personagens"
              data={charactersCount?.data?.characters.info?.count}
            />
          </WrapItem>
        </Wrap>
      </Container>
    </>
  );
};
