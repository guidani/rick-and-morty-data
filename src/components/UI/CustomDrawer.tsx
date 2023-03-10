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
  HStack,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { RefObject } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ChangeColorModeButton } from "./ChangeColorModeButton";
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
                    bgColor="red.400"
                    color="blackAlpha.900"
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
                    bgColor="green.400"
                    color="blackAlpha.900"
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
                    bgColor="blue.400"
                    color="blackAlpha.900"
                    borderRadius="md"
                  >
                    <Link to="/episodes" onClick={onOpen} ref={btnRef}>
                      Epis??dios
                    </Link>
                  </Center>
                </Box>
                <Box>
                  <Center
                    w="100%"
                    minW="16rem"
                    h="40px"
                    bgColor="yellow.300"
                    color="blackAlpha.900"
                    borderRadius="md"
                  >
                    <Link to="/statistics" onClick={onOpen} ref={btnRef}>
                      Estatisticas
                    </Link>
                  </Center>
                </Box>
              </VStack>
            </DrawerBody>

            <DrawerFooter>
              <HStack w="100%">
                <ChangeColorModeButton />
                <Spacer />
                <Text>Rick and Morty</Text>
              </HStack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
