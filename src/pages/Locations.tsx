import { Container, Heading } from "@chakra-ui/react";
import { LocationsGrid } from "../components/LocationsGrid";

export const Locations = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Heading as="h2">Lugares</Heading>
        <LocationsGrid />
      </Container>
    </>
  );
};
