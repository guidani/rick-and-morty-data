import { Badge } from "@chakra-ui/react";

export const CustomBadge = (props: any) => {
  if (props?.status === "Alive") {
    return (
      <Badge variant="solid" colorScheme="green">
        Alive
      </Badge>
    );
  }
  if (props?.status === "Dead") {
    return (
      <Badge variant="solid" colorScheme="blackAlpha" color="white">
        Dead
      </Badge>
    );
  }
  if (props?.status === "Unknown") {
    return (
      <Badge variant="solid" colorScheme="gray">
        Unknown
      </Badge>
    );
  }
  return (
    <Badge variant="solid" colorScheme="gray">
      Unknown
    </Badge>
  );
};
