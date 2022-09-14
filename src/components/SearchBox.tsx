import { useLazyQuery } from "@apollo/client";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GET_CHARACTER_BY_NAME } from "../services/graphql/queries/getCharacterByName";

export const SearchBox = () => {
  const [name, setName] = useState("");
  const [getCharacterByName, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_BY_NAME,
    {
      variables: { name: name },
    }
  );

  console.log({
    loading,
    error,
    data,
    called,
  });
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
            onClick={() => getCharacterByName()}
            colorScheme="brand"
          >
            Pesquisar
          </Button>
        </Box>
      </Flex>
      {loading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {data && (
        <>
          {data.characters.results.map((char) => {
            return <p>{char.id}</p>;
          })}
        </>
      )}
    </>
  );
};
