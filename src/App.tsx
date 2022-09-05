import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <VStack>
      <Box w="100%" bg="brand.500">
        <Container h={["100px", "200px"]} maxW="container.lg">
          <Center h="full" w="100%">
            <Heading as="h1" size="3xl" color="#fff">
              Rick and Morty
            </Heading>
          </Center>
        </Container>
      </Box>
      {/* Search box */}
      <Box w="100%">
        <Container maxW="container.lg">
          <HStack>
            <Input
              width="100%"
              htmlSize={4}
              placeholder="Buscar um personagem"
            />
            <Button leftIcon={<FiSearch />} variant="solid">
              Pesquisar
            </Button>
          </HStack>
        </Container>
      </Box>
    </VStack>
  );
}

export default App;
