import { Center, Container, Heading } from "@chakra-ui/react";
import { LocationGrid } from "./locationGrid";

const Location = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Center>
          <Heading as="h1" marginBottom="4" size="xl">
            Localização
          </Heading>
        </Center>
        <LocationGrid />
      </Container>
    </>
  );
};

export default Location;
