import { Box, Container, Heading, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import CustomDrawer from "./CustomDrawer";
import { SearchBox } from "./SearchBox";

export const Header = () => {
  return (
    <Box
      color="#ffffff"
      bg={"blue.300"}
      w="100%"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      py={[2, 4, 6]}
    >
      <Container maxW="container.lg">
        <HStack justifyContent="space-between">
          <RouterLink to="/">
            <Heading fontSize={["1xl", "2xl", "4xl"]}>Rick and Morty</Heading>
          </RouterLink>
          <CustomDrawer />
        </HStack>
        <SearchBox />
      </Container>
    </Box>
  );
};
