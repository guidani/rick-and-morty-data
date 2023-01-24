import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { FaRegFrown } from "react-icons/fa";

// TODO: Adicionar uma imagem ou emoji
export const NotFound = () => {
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
            <FaRegFrown size="128" />
          </Center>
        </Box>

        <Text size="6xl">Nenhum resultado corresponde a sua pesquisa!</Text>
      </Flex>
    </Box>
  );
};
