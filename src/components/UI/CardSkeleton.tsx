import { SimpleGrid, Skeleton } from "@chakra-ui/react";

export const CardSkeleton = () => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={5} px={2}>
      {[...Array(10).keys()].map((i) => (
        <Skeleton height="300px" borderRadius="md" key={i}>
          <p>Carregando...</p>
        </Skeleton>
      ))}
    </SimpleGrid>
  );
};
