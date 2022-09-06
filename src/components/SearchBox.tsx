import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export const SearchBox = () => {
  return (
    <Flex
      w={{base: '100%', md: "60%"}}
      px={2}
      gap='2'
      flexDirection={{ base: "column", sm: "row" }}
    >
      <Input width="100%" htmlSize={4} placeholder="Buscar um personagem" />
      <Box>
        <Button
          w="100%"
          leftIcon={<FiSearch />}
          variant="solid"
          onClick={() => console.log("ola")}
        >
          Pesquisar
        </Button>
      </Box>
    </Flex>
  );
};
