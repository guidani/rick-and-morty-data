import { Center, Container, Heading } from "@chakra-ui/react";
import { LocationsGrid } from "../components/LocationsGrid";

const Locations = () => {
  console.log(window.location.pathname);
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
