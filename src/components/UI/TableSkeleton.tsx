import { Box, Skeleton } from "@chakra-ui/react";

export const TableSkeleton = () => {
  return (
    <Box w="100%" display="grid" gap="4" mt="16">
      {[...Array(10).keys()].map((i) => (
        <Skeleton height="40px" key={i}>
          <p>Carregando...</p>
        </Skeleton>
      ))}
    </Box>
  );
};
