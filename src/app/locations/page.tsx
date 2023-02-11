import { Center, Container, Heading } from "@chakra-ui/react";
import { LocationsGrid } from "./LocationsGrid";

const Locations = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Center>
          <Heading as="h1" marginBottom="4" size="xl">
            Lugares
          </Heading>
        </Center>
        <LocationsGrid />
      </Container>
    </>
  );
};

export default Locations;
