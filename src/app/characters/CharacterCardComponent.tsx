import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CustomBadge } from "../../components/UI/CustomBadge";
import { ICharacter } from "./ICharacter";

export const CharacterCardComponent = ({
  id,
  name,
  status,
  image,
  species,
  gender,
  origin,
  location,
}: ICharacter) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={name} objectFit="cover" w="100%" />
      <Box p={2}>
        <Flex justifyContent="space-between">
          <Text>Nome</Text>
          <Text noOfLines={1}>{name}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Status:</Text>
          <CustomBadge status={status} />
        </Flex>
        {/* Modal */}
        <Button onClick={onOpen} colorScheme="brand" w="full" mt="1">
          Detalhes
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader alignSelf="center">{name}</ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <Image
                src={image}
                alt={name}
                alignSelf="center"
                objectFit="cover"
                w="100%"
              />
              <Flex justifyContent="space-between">
                <Text>Status:</Text>
                <CustomBadge status={status} />
              </Flex>
              <Flex justifyContent="space-between">
                <Text>Espécie:</Text>
                <Text>{species}</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>Gênero:</Text>
                <Text>{gender}</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>Origem:</Text>
                <Text>{origin?.name}</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>Localização:</Text>
                <Text>{location?.name}</Text>
              </Flex>
            </ModalBody>
            {/*  */}
            <ModalFooter>
              <Button colorScheme="red" onClick={onClose} w="full">
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};
