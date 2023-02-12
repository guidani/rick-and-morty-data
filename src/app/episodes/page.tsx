import { Center, Container, Heading } from "@chakra-ui/react";
import { EpisodesGrid } from "./EpisodesGrid";

const Episodes = () => {
  
  return (
    <>
      <Container maxW="container.lg">
        <Center>
          <Heading as="h1" marginBottom="4" size="xl">
            Episódios
          </Heading>
        </Center>
        <EpisodesGrid />
      </Container>
    </>
  );
};

export default Episodes;
