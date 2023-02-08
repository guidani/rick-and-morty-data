import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { FiXOctagon } from "react-icons/fi";

// TODO: Adicionar uma imagem ou emoji
export const ErrorWidget = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex direction="column" gap="4">
        <Box w="100%" textAlign="center">
          <Center>
            <FiXOctagon size="128" color="red.500" />
          </Center>
        </Box>
        <Text size="6xl">Nenhum resultado corresponde a sua pesquisa!</Text>
      </Flex>
    </Box>
  );
};
