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
      py={[6, 12, 16]}
    >
      <RouterLink to="/">
        <Heading fontSize={[30, 50, 60]}>Rick and Morty</Heading>
      </RouterLink>
    </Box>
  );
};
