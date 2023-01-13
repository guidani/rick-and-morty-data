import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const SearchBox = () => {
  const [name, setName] = useState("");
  const [inputError, setInputError] = useState(false);
  const navigate = useNavigate();

  function goSearch() {
    if (!name) {
      setInputError(true);
      return;
    } else {
      return navigate(`/search/${name}`);
    }
  }
  return (
    <>
      <Flex
        w={{ base: "100%", md: "60%" }}
        px={2}
        gap="2"
        flexDirection={{ base: "column", sm: "row" }}
      >
        <FormControl isInvalid={inputError}>
          <Input
            width="100%"
            htmlSize={4}
            placeholder="Buscar um personagem"
            errorBorderColor="red.300"
            onChange={(e) => setName(e.target.value)}
          />
          {inputError ? (
            <FormErrorMessage>Valor necessário</FormErrorMessage>
          ) : null}
        </FormControl>
        <Box>
          <Button
            w="100%"
            leftIcon={<FiSearch />}
            variant="solid"
            onClick={goSearch}
            colorScheme="brand"
          >
            Pesquisar
          </Button>
        </Box>
      </Flex>
    </>
  );
};
