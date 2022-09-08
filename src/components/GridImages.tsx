import { useQuery } from "@apollo/client";
import { SimpleGrid } from "@chakra-ui/react";
import { GET_CHARACTERS } from "../services/graphql/queries/getCharacters";
import { CardComponent, ICharacter } from "./CardComponent";

export const GridImages = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loadin...</p>;
  if (error) return <p>Error...</p>;

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={5} px={2}>
      {data.characters.results.map(
        ({ id, name, status, image }: ICharacter) => (
          <CardComponent
            key={id}
            id={id}
            image={image}
            name={name}
            status={status}
          />
        )
      )}
    </SimpleGrid>
  );
};
