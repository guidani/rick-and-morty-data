import { Heading, VStack } from "@chakra-ui/react";
import { GridImages } from "./components/GridImages";
import { Header } from "./components/Header";
import { SearchBox } from "./components/SearchBox";

function App() {
  return (
    <VStack>
      {/* Header */}
      <Header />
      {/* Search box */}
      <SearchBox />
      {/* Characters */}
      <Heading as='h2'>
        Characters
      </Heading>
      <GridImages />
    </VStack>
  );
}

export default App;
