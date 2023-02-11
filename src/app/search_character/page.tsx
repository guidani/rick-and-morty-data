import { useQuery } from "@apollo/client";
import { Center, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ErrorWidget } from "../../components/UI/ErrorWidget";
import { CharacterCardComponent } from "../characters/CharacterCardComponent";
import { ICharacter } from "../characters/ICharacter";

import { CardSkeleton } from "../../components/UI/CardSkeleton";
import { NotFound } from "../../components/UI/NotFound";
import { Pagination } from "../../components/UI/Pagination";
import { GET_CHARACTER_BY_NAME } from "../../services/graphql/queries/getCharacterByName";


const Search = () => {
  const [counter, setCounter] = useState(1);
  const { name } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_NAME, {
    variables: { name: name, page: counter },
  });

  if (loading) return <CardSkeleton />;
  if (error) return <ErrorWidget />;

  return (
    <>
      <Container maxW="container.lg">
        <Center>
          <Heading as="h1" marginBottom="4" size="xl">
            Resultado da busca
          </Heading>
        </Center>
        {data.characters.results.length == 0 ? (
          <NotFound />
        ) : (
          <>
            <Pagination onClick={setCounter} data={data?.characters?.info} />

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

            <Pagination onClick={setCounter} data={data?.characters?.info} />
          </>
        )}
      </Container>
    </>
  );
};

export default Search;
