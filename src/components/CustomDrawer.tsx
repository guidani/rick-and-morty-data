import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { RefObject } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { SearchBox } from "./SearchBox";

export default function CustomDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef() as RefObject<any>;
  return (
    <>
      <Box display={{ base: "block", md: "none" }}>
        <Button ref={btnRef} onClick={onOpen} backgroundColor="transparent">
          <FiMenu size="30" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              Menu
              <SearchBox />
            </DrawerHeader>

            <DrawerBody>
              <VStack>
                <Box>
                  <Center
                    w="100%"
                    minW="16rem"
                    h="40px"
                    bg="red.200"
                    borderRadius="md"
                  >
                    <Link to="/">Personagens</Link>
                  </Center>
                </Box>
                <Box>
                  <Center
                    w="100%"
                    minW="16rem"
                    h="40px"
                    bg="tomato"
                    borderRadius="md"
                  >
                    <Link to="/locations">Lugares</Link>
                  </Center>
                </Box>
                <Box>
                  <Center
                    w="100%"
                    minW="16rem"
                    h="40px"
                    bg="blue.200"
                    borderRadius="md"
                  >
                    <Link to="/episodes" onClick={onOpen} ref={btnRef}>
                      Episódios
                    </Link>
                  </Center>
                </Box>
              </VStack>
            </DrawerBody>

            <DrawerFooter>Rick and Morty</DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
