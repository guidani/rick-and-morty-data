import { Button, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

export const ChangeColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} fontSize="1xl">
      {colorMode === "light" ? (
        <FiMoon color="212121" />
      ) : (
        <FiSun color="212121" />
      )}
    </Button>
  );
};
