import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";

export interface ICharacter {
  id: number;
  name: string;
  status?: string;
  image: string;
}

export const CardComponent = ({ id, name, status, image }: ICharacter) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={name} />
      <Box p={2}>
        <Text>{id}</Text>
        <Flex justifyContent="space-between">
          <Text>Name</Text>
          <Text>{name}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Status:</Text>
          <CustomBadge status={status} />
        </Flex>
      </Box>
    </Box>
  );
};

export const CustomBadge = (props: any) => {
  if (props?.status === "Alive") {
    return (
      <Badge variant="solid" colorScheme="green">
        Alive
      </Badge>
    );
  }
  if (props?.status === "Dead") {
    return (
      <Badge variant="solid" colorScheme="blackAlpha" color="white">
        Dead
      </Badge>
    );
  }
  if (props?.status === "Unknown") {
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
