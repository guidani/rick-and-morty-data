import { useQuery } from "@apollo/client";
import { Button, Container, HStack, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { GET_CHARACTERS } from "../services/graphql/queries/getCharacters";
import { CardComponent, ICharacter } from "./CardComponent";
import { LoadingIcon } from "./LoadingIcon";

export const GridImages = () => {
  const [counter, setCounter] = useState(1);
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: counter },
  });
  let hasPrev = data?.characters?.info?.prev;
  let hasNext = data?.characters?.info?.next;

  if (loading) return <LoadingIcon />;
  if (error) return <p>Error...</p>;

  return (
    <>
      <Container maxW="container.lg">
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
      </Container>{" "}
    </>
  );
};
