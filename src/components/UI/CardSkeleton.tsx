import { SimpleGrid, Skeleton } from "@chakra-ui/react";

export const CardSkeleton = () => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={5} px={2}>
      <Skeleton height='300px' borderRadius='md'>
        <p>Carregando...</p>
      </Skeleton>
      <Skeleton height='300px' borderRadius='md'>
        <p>Carregando...</p>
      </Skeleton>
      <Skeleton height='300px' borderRadius='md'>
        <p>Carregando...</p>
      </Skeleton>
      <Skeleton height='300px' borderRadius='md'>
        <p>Carregando...</p>
      </Skeleton>
      <Skeleton height='300px' borderRadius='md'>
        <p>Carregando...</p>
      </Skeleton>
      <Skeleton height='300px' borderRadius='md'>
        <p>Carregando...</p>
      </Skeleton>
      <Skeleton height='300px' borderRadius='md'>
        <p>Carregando...</p>
      </Skeleton>
      <Skeleton height='300px' borderRadius='md'>
        <p>Carregando...</p>
      </Skeleton>
    </SimpleGrid>
  );
};
