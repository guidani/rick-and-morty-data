import { useLazyQuery, useQuery } from '@apollo/client';
import { SimpleGrid } from '@chakra-ui/react';
import {useParams} from 'react-router-dom'
import { CardComponent, ICharacter } from '../components/CardComponent';
import { LoadingIcon } from '../components/LoadingIcon';
import { GET_CHARACTER_BY_NAME } from '../services/graphql/queries/getCharacterByName';

export const Search = () => {
  let {name} = useParams();
  const { loading, error, data } = useQuery(
    GET_CHARACTER_BY_NAME,
    {
      variables: { name: name },
    }
  );

  if (loading) return <LoadingIcon />;
  if (error) return <p>Error...</p>;

  return (
    <>
    <div>{name}</div>
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
    
  )
}