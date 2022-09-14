import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const SearchBox = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <Flex
        w={{ base: "100%", md: "60%" }}
        px={2}
        gap="2"
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Input
          width="100%"
          htmlSize={4}
          placeholder="Buscar um personagem"
          onChange={(e) => setName(e.target.value)}
        />
        <Box>
          <Button
            w="100%"
            leftIcon={<FiSearch />}
            variant="solid"
            onClick={() => navigate(`/search/${name}`)}
            colorScheme="brand"
          >
            Pesquisar
          </Button>
        </Box>
      </Flex>
     
    </>
  );
};
