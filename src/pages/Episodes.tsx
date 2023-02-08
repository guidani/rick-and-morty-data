import { Container, Heading } from "@chakra-ui/react";
import { EpisodesGrid } from "../components/EpisodesGrid";

export const Episodes = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Heading as="h2" marginBottom="4">
          Episódios
        </Heading>
        <EpisodesGrid />
      </Container>
    </>
  );
};
