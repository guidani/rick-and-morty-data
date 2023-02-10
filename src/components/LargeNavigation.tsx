import { Container, Grid, GridItem, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const LargeNavigation = () => {
  return (
    <Container
      maxW="container.lg"
      display={{ base: "none", md: "block" }}
      marginTop="2"
    >
      <Grid w="100%" gridTemplateColumns="repeat(4, 1fr)" gap="5">
        <GridItem
          w="100%"
          bgColor="red.400"
          textAlign="center"
          py="2"
          borderRadius="md"
          _hover={{backgroundColor: 'red.500'}}
        >
          <Link
            as={RouterLink}
            to="/"
            display="block"
            fontWeight="400"
            _hover={{ textDecoration: "none" }}
          >
            Personagens
          </Link>
        </GridItem>
        <GridItem
          w="100%"
          bgColor="green.400"
          textAlign="center"
          py="2"
          borderRadius="md"
          _hover={{backgroundColor: 'green.500'}}
        >
          <Link
            as={RouterLink}
            to="/locations"
            display="block"
            fontWeight="400"
            _hover={{ textDecoration: "none" }}
          >
            Lugares
          </Link>
        </GridItem>
        <GridItem
          w="100%"
          bgColor="blue.400"
          textAlign="center"
          py="2"
          borderRadius="md"
          _hover={{backgroundColor: 'blue.500'}}
        >
          <Link
            as={RouterLink}
            to="/episodes"
            display="block"
            fontWeight="400"
            _hover={{ textDecoration: "none" }}
          >
            Episódios
          </Link>
        </GridItem>
        <GridItem
          w="100%"
          bgColor="yellow.300"
          textAlign="center"
          py="2"
          borderRadius="md"
          _hover={{backgroundColor: 'yellow.500'}}
        >
          <Link
            as={RouterLink}
            to="/statistics"
            display="block"
            fontWeight="400"
            _hover={{ textDecoration: "none" }}
          >
            Estatisticas
          </Link>
        </GridItem>
      </Grid>
    </Container>
  );
};
