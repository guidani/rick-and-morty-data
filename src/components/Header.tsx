import { Box, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const Header = () => {
  return (
    <Box
      color="#ffffff"
      bg={"brand.500"}
      w="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={[2, 4, 6]}
    >
      <RouterLink to="/">
        <Heading fontSize={["1xl", "2xl", "4xl"]}>Rick and Morty</Heading>
      </RouterLink>
    </Box>
  );
};
