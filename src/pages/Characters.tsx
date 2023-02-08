import { Center, Container, Heading } from "@chakra-ui/react";
import { CharactersGrid } from "../components/CharactersGrid";

export const Characters = () => {
  console.log(window.location.pathname);
  return (
    <>
      <Container maxW="container.lg">
        <Center>
          <Heading as="h1" marginBottom="4" size="xl">
            Personagens
          </Heading>
        </Center>
        <CharactersGrid />
      </Container>
    </>
  );
};
