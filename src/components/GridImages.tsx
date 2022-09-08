import { useQuery } from "@apollo/client";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { GET_CHARACTERS } from "../services/graphql/queries/getCharacters";
import { CardComponent, ICharacter } from "./CardComponent";

export const GridImages = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  if (error) return <p>Error...</p>;

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={5} px={2}>
      {data.characters.results.map(
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
  );
};
