import { Container, Heading } from "@chakra-ui/react";
import { EpisodesGrid } from "../components/EpisodesGrid";

export const Episodes = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Heading as="h2">Episodes</Heading>
        <EpisodesGrid />
      </Container>
    </>
  );
};
