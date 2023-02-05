import { Container, Heading } from "@chakra-ui/react";
import { CharactersGrid } from "../components/CharactersGrid";

export const Characters = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Heading as="h2">Personagens</Heading>
        <CharactersGrid />
      </Container>
    </>
  );
};
