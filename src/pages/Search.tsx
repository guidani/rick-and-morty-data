import { useQuery } from "@apollo/client";
import {
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterCardComponent } from "../components/CharacterCardComponent";
import { ErrorWidget } from "../components/ErrorWidget";
import { ICharacter } from "../components/ICharacter";

import { LoadingIcon } from "../components/LoadingIcon";
import { NotFound } from "../components/NotFound";
import { GET_CHARACTER_BY_NAME } from "../services/graphql/queries/getCharacterByName";

const Search = () => {
  const [counter, setCounter] = useState(1);
  const { name } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_NAME, {
    variables: { name: name, page: counter },
  });

  let hasPrev = data?.characters?.info?.prev;
  let hasNext = data?.characters?.info?.next;

  if (loading) return <LoadingIcon />;
  if (error) return <ErrorWidget />;

  return (
    <>
      <Container maxW="container.lg">
        <Heading as="h1" marginBottom="4" size="xl">
          Resultado da busca
        </Heading>
        {data.characters.results.length == 0 ? (
          <NotFound />
        ) : (
          <>
            <HStack m="4">
              <Button
                onClick={() => setCounter(counter - 1)}
                disabled={hasPrev == null ? true : false}
              >
                Anterior
              </Button>
              <Button
                onClick={() => setCounter(counter + 1)}
                disabled={hasNext ? false : true}
              >
                Próximo
              </Button>
            </HStack>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={5} px={2}>
              {data?.characters?.results.map(
                ({
                  id,
                  name,
                  status,
                  image,
                  species,
                  gender,
                  location,
                  origin,
                }: ICharacter) => (
                  <CharacterCardComponent
                    key={id}
                    id={id}
                    image={image}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
                    location={location}
                    origin={origin}
                  />
                )
              )}
            </SimpleGrid>
          </>
        )}
      </Container>
    </>
  );
};

export default Search;
