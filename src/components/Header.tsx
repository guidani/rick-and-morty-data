import { Box, Container, Heading, HStack, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ChangeColorModeButton } from "./ChangeColorModeButton";
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
      py={[2]}
    >
      <Container maxW="container.lg">
        <HStack justifyContent="space-between">
          <RouterLink to="/">
            <Heading fontSize={["2xl", "4xl"]} minW="max-content">
              Rick and Morty
            </Heading>
          </RouterLink>

          <Spacer />
          <Box w="100%" display={{ base: "none", md: "block" }}>
            <SearchBox />
          </Box>
          <CustomDrawer />
          {/*  */}
          <Box display={{ base: "none", md: "block" }}>
            <ChangeColorModeButton />
          </Box>
          {/*  */}
        </HStack>
      </Container>
    </Box>
  );
};
