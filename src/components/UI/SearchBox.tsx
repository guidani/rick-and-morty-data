import {
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
      <Flex w="100%" gap="2" flexDirection={{ base: "column", md: "row" }}>
        <FormControl isInvalid={inputError}>
          <Input
            variant="outline"
            width="100%"
            htmlSize={4}
            placeholder="Buscar um personagem"
            _placeholder={{ color: "white" }}
            _focus={{ borderColor: "white" }}
            errorBorderColor="red.300"
            onChange={(e) => setName(e.target.value)}
          />
          {inputError ? (
            <FormErrorMessage>Valor necessário</FormErrorMessage>
          ) : null}
        </FormControl>

        <Button
          px="6"
          maxW="max-content"
          leftIcon={<FiSearch />}
          variant="solid"
          onClick={goSearch}
          colorScheme="brand"
        >
          Pesquisar
        </Button>
      </Flex>
    </>
  );
};
