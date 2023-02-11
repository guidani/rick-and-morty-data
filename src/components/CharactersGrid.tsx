import { useQuery } from "@apollo/client";
import { SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { GET_CHARACTERS } from "../services/graphql/queries/getCharacters";
import { CardSkeleton } from "./CardSkeleton";
import { CharacterCardComponent } from "./CharacterCardComponent";
import { ErrorWidget } from "./ErrorWidget";
import { ICharacter } from "./ICharacter";
import { Pagination } from "./Pagination";

export const CharactersGrid = () => {
  const [counter, setCounter] = useState(1);
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: counter },
  });

  if (loading) return <CardSkeleton />;
  if (error) return <ErrorWidget />;

  return (
    <>
      {/*  */}
      <Pagination onClick={setCounter} data={data?.characters?.info} />

      {/*  */}

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
      {/*  */}

      <Pagination onClick={setCounter} data={data?.characters?.info} />

      {/*  */}
    </>
  );
};
