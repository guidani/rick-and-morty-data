import { Box, Center, Container, Heading, HStack, Input, VStack, Button } from "@chakra-ui/react";

function App() {
  return (
    <VStack>
    <Box w="full" bg="brand.500">
      <Container h="200px" centerContent>
        <Center h="full">
          <Heading as="h1" size="3xl" color="#fff">Rick and Morty</Heading>
        </Center>
      </Container>
    </Box>
    {/* Search box */}
    <Box w='full'>
      <Container>
      <HStack>
        <Input width="auto" htmlSize={4}/>
        <Button colorScheme="brand.500">Pesquisar</Button>
      </HStack>
      </Container>
    </Box>
    </VStack>
  );
}

export default App;
