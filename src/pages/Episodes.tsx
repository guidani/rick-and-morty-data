import { Center, Container, Heading } from "@chakra-ui/react";
import { EpisodesGrid } from "../components/EpisodesGrid";

export const Episodes = () => {
  console.log(window.location.pathname);
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
