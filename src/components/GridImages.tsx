import { SimpleGrid } from "@chakra-ui/react";
import { CardComponent } from "./CardComponent";

export const GridImages = () => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 4}} spacing={5} px={2}>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </SimpleGrid>
  );
};
