import { useQuery } from "@apollo/client";
import { Button, SimpleGrid } from "@chakra-ui/react";
import { GET_CHARACTERS } from "../services/graphql/queries/getCharacters";
import { CardComponent, ICharacter } from "./CardComponent";
import { LoadingIcon } from "./LoadingIcon";
import {useState} from 'react' 

export const GridImages = () => {
  const [counter, setCounter] = useState(1)
  const { loading, error, data, refetch } = useQuery(GET_CHARACTERS, {
    variables: {page: counter}
  });

  if (loading) return <LoadingIcon />;
  if (error) return <p>Error...</p>;

  return (
    <>
    <Button onClick={ () => setCounter(counter - 1)} disabled={counter == 1 ? true : false}>Prev</Button>
    <Button onClick={ () => setCounter(counter + 1)} disabled={counter == 42 ? true : false}>Next</Button>
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
  );
};
