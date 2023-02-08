import { Center, Container, Wrap, WrapItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const LargeNavigation = () => {
  return (
    <Container maxW="container.lg" display={{ base: "none", md: "block" }}>
      <Center my="4">
        <Wrap w="100%">
          <WrapItem flex="1">
            <Center
              w="100%"
              minW="16rem"
              h="40px"
              bg="red.200"
              borderRadius="md"
            >
              <Link to="/">Personagens</Link>
            </Center>
          </WrapItem>
          <WrapItem flex="1">
            <Center
              w="100%"
              minW="16rem"
              h="40px"
              bg="tomato"
              borderRadius="md"
            >
              <Link to="/locations">Lugares</Link>
            </Center>
          </WrapItem>
          <WrapItem flex="1">
            <Center
              w="100%"
              minW="16rem"
              h="40px"
              bg="blue.200"
              borderRadius="md"
            >
              <Link to="/episodes">Episódios</Link>
            </Center>
          </WrapItem>
        </Wrap>
      </Center>
    </Container>
  );
};
