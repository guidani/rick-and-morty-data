import { Heading } from "@chakra-ui/react";
import { GridImages } from "../components/GridImages";
import { SearchBox } from "../components/SearchBox";

export const Home = () => {
  return (
    <>
      <SearchBox />
      <Heading as="h2">Personagens</Heading>
      <GridImages />
    </>
  );
};
