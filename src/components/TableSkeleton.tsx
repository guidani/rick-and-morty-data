import { Box, Skeleton } from "@chakra-ui/react";

export const TableSkeleton = () => {
  return (
    <Box w="100%" display="grid" gap="4" mt="16">
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
    </Box>
  );
};
