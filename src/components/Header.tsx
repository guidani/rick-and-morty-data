import { Box, Heading, Text } from "@chakra-ui/react";

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
      <Heading fontSize={[30, 50, 60]}>Rick and Morty</Heading>
      {/* <Text fontSize={{ base: 10, md: 16, lg: 40 }}>Teste</Text> */}
    </Box>
  );
};
