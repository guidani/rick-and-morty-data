import { Container, Heading } from "@chakra-ui/react";
import { GridImages } from "../components/GridImages";

export const Characters = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Heading as="h2">Personagens</Heading>
        <GridImages />
      </Container>
    </>
  );
};
