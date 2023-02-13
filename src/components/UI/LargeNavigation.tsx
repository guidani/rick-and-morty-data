import { Container, Grid, GridItem, Link } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

export const LargeNavigation = () => {
  const location = useLocation();
  const pathName = location.pathname.substring(1);

  const isCharPage = () => {
    const pathName = location.pathname;
    if (pathName === "/") return true;
  };

  const isLocationPage = () => {
    if (pathName === "locations") return true;
  };

  const isEpisodesPage = () => {
    if (pathName === "episodes") return true;
  };
  const isStatisticsPage = () => {
    if (pathName === "statistics") return true;
  };

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
          border={isCharPage() ? "2px" : "none"}
          borderStyle="solid"
          borderColor="brand.500"
          borderRadius="md"
          _hover={{ backgroundColor: "red.500" }}
        >
          <Link
            as={RouterLink}
            to="/"
            display="block"
            color="blackAlpha.900"
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
          _hover={{ backgroundColor: "green.500" }}
          border={isLocationPage() ? "2px" : "none"}
          borderStyle="solid"
          borderColor="brand.500"
        >
          <Link
            as={RouterLink}
            to="/locations"
            display="block"
            fontWeight="400"
            color="blackAlpha.900"
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
          _hover={{ backgroundColor: "blue.500" }}
          border={isEpisodesPage() ? "2px" : "none"}
          borderStyle="solid"
          borderColor="brand.500"
        >
          <Link
            as={RouterLink}
            to="/episodes"
            display="block"
            fontWeight="400"
            color="blackAlpha.900"
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
          _hover={{ backgroundColor: "yellow.500" }}
          border={isStatisticsPage() ? "2px" : "none"}
          borderStyle="solid"
          borderColor="brand.500"
        >
          <Link
            as={RouterLink}
            to="/statistics"
            display="block"
            fontWeight="400"
            color="blackAlpha.900"
            _hover={{ textDecoration: "none" }}
          >
            Estatisticas
          </Link>
        </GridItem>
      </Grid>
    </Container>
  );
};
