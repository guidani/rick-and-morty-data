import { useQuery } from "@apollo/client";
import { Center, Container, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { CustomStat } from "../components/CustomStat";
import {
  GET_ALIVE_RICKS,
  GET_DEAD_RICKS,
  GET_RICKS,
  GET_UNKNOW_RICKS,
} from "../services/graphql/queries/getRickInfo";

export const Statistics = () => {
  const rickData = useQuery(GET_RICKS);
  const aliveRickData = useQuery(GET_ALIVE_RICKS);
  const deadRickData = useQuery(GET_DEAD_RICKS);
  const unknowRickData = useQuery(GET_UNKNOW_RICKS);

  return (
    <>
      <Container maxW="container.lg" h="100vh">
        <Center>
          <Heading as="h1" marginBottom="4" size="xl">
            Estatísticas
          </Heading>
        </Center>
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
              label="Ricks paradeiro desconhecido"
              data={unknowRickData?.data?.characters.info?.count}
            />
          </WrapItem>
        </Wrap>
      </Container>
    </>
  );
};
