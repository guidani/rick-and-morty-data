import { Box, Image, Text } from "@chakra-ui/react";

export const CardComponent = () => {
  const properties = {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={properties.image} alt={properties.name} />
      <Box p={2}>
        <Text>Name: {properties.name}</Text>
        <Text>Status: {properties.status}</Text>
      </Box>
    </Box>
  );
};
