import { useQuery } from "@apollo/client";
import { Button, Heading, HStack, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CardComponent, ICharacter } from "../components/CardComponent";
import { LoadingIcon } from "../components/LoadingIcon";
import { NotFound } from "../components/NotFound";
import { GET_CHARACTER_BY_NAME } from "../services/graphql/queries/getCharacterByName";

export const Search = () => {
  const [counter, setCounter] = useState(1);
  const { name } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_NAME, {
    variables: { name: name, page: counter },
  });

  let hasPrev = data?.characters?.info?.prev;
  let hasNext = data?.characters?.info?.next;

  if (loading) return <LoadingIcon />;
  if (error) return <p>Error...</p>;

  return (
    <>
      <Heading as="h4">Resultado da busca</Heading>
      {data.characters.results.length == 0 ? (
        // TODO: adicionar um componente bonito
        <NotFound />
      ) : (
        <>
          <HStack>
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
                <CardComponent
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
    </>
  );
};
