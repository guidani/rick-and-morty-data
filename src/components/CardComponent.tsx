import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";

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
        <Flex justifyContent="space-between">
          <Text>Name</Text>
          <Text>{properties.name}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Status:</Text>
          <CustomBadge alive />
        </Flex>
      </Box>
    </Box>
  );
};

type CharacterStatus = {
  alive?: boolean;
  dead?: boolean;
  unknown?: boolean;
};

export const CustomBadge = (props: CharacterStatus) => {
  if (props.alive) {
    return (
      <Badge variant="solid" colorScheme="green">
        Alive
      </Badge>
    );
  }
  if (props.dead) {
    return (
      <Badge variant="solid" colorScheme="blackAlpha" color="white">
        Dead
      </Badge>
    );
  }
  if (props.unknown) {
    return (
      <Badge variant="solid" colorScheme="gray">
        Unknown
      </Badge>
    );
  }
  return (
    <Badge variant="solid" colorScheme="gray">
      Unknown
    </Badge>
  );
};
